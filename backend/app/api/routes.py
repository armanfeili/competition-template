from fastapi import APIRouter

from app.models.schemas import DemoRequest, DemoResponse
from app.services.logic import process_demo

api_router = APIRouter()


@api_router.post("/demo", response_model=DemoResponse, tags=["demo"])
def run_demo(request: DemoRequest) -> DemoResponse:
    """Simple demo endpoint to show request/response flow."""
    return process_demo(request)
