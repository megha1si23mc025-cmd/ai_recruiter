import os
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai_client import ai_client

router = APIRouter()

class ResumeText(BaseModel):
    text: str

@router.post("/resume-screening")
async def screen_resume(data: ResumeText):
    prompt = f"Extract skills, experience, and keywords from this resume:\n{data.text}"
    result = await ai_client.generate_text(prompt)
    return {"extracted": result}
