from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

# ✅ Import agent routers
from agents.job_description_agent import router as job_router
from agents.resume_screening_agent import router as resume_router
from agents.matching_agent import router as match_router

# ✅ Models
from models import FullProcessInput

# ✅ Env + DB
from dotenv import load_dotenv
import os
import requests

# ✅ Async HTTP client
import httpx

# ✅ Load environment variables
load_dotenv()

# ✅ FastAPI app
app = FastAPI(title="HireGenie AI Backend")

# ✅ CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Register agent routes
app.include_router(job_router, prefix="/agents")
app.include_router(resume_router, prefix="/agents")
app.include_router(match_router, prefix="/agents")

# ✅ Supabase config
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# ✅ Shared HTTP client (important)
client = httpx.AsyncClient()

# ✅ Health check
@app.get("/health")
def health():
    return {"status": "ok ✅"}

# ✅ Test DB connection
@app.get("/test-db")
def test_db():
    try:
        url = f"{SUPABASE_URL}/rest/v1/jobs"
        headers = {
            "apikey": SUPABASE_KEY,
            "Authorization": f"Bearer {SUPABASE_KEY}"
        }

        response = requests.get(url, headers=headers, verify=False)

        return {
            "status": "connected ✅",
            "data": response.json()
        }

    except Exception as e:
        return {
            "status": "error ❌",
            "message": str(e)
        }

# ✅ ✅ FULL AGENT PIPELINE (Orchestrator)
@app.post("/agents/full-process")
async def full_process(data: FullProcessInput):

    try:
        # ✅ 1. Job Description Agent
        job_resp = await client.post(
            "http://127.0.0.1:8000/agents/job-description",
            json={"title": data.job_title}
        )

        if job_resp.status_code != 200:
            raise HTTPException(status_code=500, detail="Job agent failed")

        job_desc = job_resp.json().get("description", "")

        # ✅ 2. Resume Screening Agent
        resume_resp = await client.post(
            "http://127.0.0.1:8000/agents/resume-screening",
            json={"text": data.resume_text}
        )

        if resume_resp.status_code != 200:
            raise HTTPException(status_code=500, detail="Resume agent failed")

        resume_summary = resume_resp.json().get("extracted", "")

        # ✅ 3. Matching Agent
        match_resp = await client.post(
            "http://127.0.0.1:8000/agents/match",
            json={
                "job_description": job_desc,
                "resume_text": data.resume_text
            }
        )

        if match_resp.status_code != 200:
            raise HTTPException(status_code=500, detail="Match agent failed")

        match_result = match_resp.json().get("match_result", "")

        # ✅ Final response
        return {
            "job_description": job_desc,
            "resume_summary": resume_summary,
            "match_result": match_result
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
