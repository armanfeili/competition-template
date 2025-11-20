from app.models.schemas import DemoRequest, DemoResponse


def process_demo(request: DemoRequest) -> DemoResponse:
    """Toy processing that can be swapped with challenge logic later."""
    normalized_text = request.text.strip()
    word_count = len(normalized_text.split()) if normalized_text else 0
    score = round(word_count * request.value, 2)
    processed_text = normalized_text.capitalize()
    details = (
        "Combines text cleanup with a tiny calculation so teams can replace this with"
        " their competition-specific logic."
    )
    return DemoResponse(
        text=normalized_text,
        value=request.value,
        processed_text=processed_text,
        score=score,
        details=details,
    )
