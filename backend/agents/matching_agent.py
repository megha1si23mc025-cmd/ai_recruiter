import os
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai_client import ai_client

router = APIRouter()

class MatchInput(BaseModel):
    job_description: str
    resume_text: str

@router.post("/match")
async def match_candidate(data: MatchInput):
    prompt = f"Compare the following job description and resume, provide a match score (0-100) and a brief explanation.\n\nJob Description:\n{data.job_description}\n\nResume:\n{data.resume_text}"
    result = await ai_client.generate_text(prompt)
    return {"match_result": result}
