from pydantic import BaseModel, Field


class DemoRequest(BaseModel):
    text: str = Field(..., example="Hello competition")
    value: float = Field(..., example=1.5)


class DemoResponse(BaseModel):
    text: str
    value: float
    processed_text: str
    score: float
    details: str
