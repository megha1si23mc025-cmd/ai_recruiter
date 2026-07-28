import os
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai_client import ai_client

router = APIRouter()

class JobTitle(BaseModel):
    title: str

@router.post("/job-description")
async def generate_job_description(data: JobTitle):
    prompt = f"Generate a full job description for the role: {data.title}"
    description = await ai_client.generate_text(prompt)
    return {"job_title": data.title, "description": description}
