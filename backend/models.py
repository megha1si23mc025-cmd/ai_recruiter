# backend/models.py

from pydantic import BaseModel


class JobTitle(BaseModel):
    title: str


class ResumeText(BaseModel):
    resume_text: str


class FullProcessInput(BaseModel):
    job_title: str
    resume_text: str

