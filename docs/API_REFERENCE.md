# API Reference

Base URL defaults to `http://localhost:8000` (configurable via `VITE_API_BASE_URL` for the frontend).

## `GET /health`
- **Description:** Liveness check for the backend.
- **Response:** `200 OK`
```json
{ "status": "ok" }
```

## `POST /api/demo`
- **Description:** Sample processing endpoint to demonstrate request/response flow.
- **Request body:**
```json
{
  "text": "hello competition",
  "value": 2
}
```
- **Response:** `200 OK`
```json
{
  "text": "hello competition",
  "value": 2,
  "processed_text": "Hello competition",
  "score": 4,
  "details": "Combines text cleanup with a tiny calculation so teams can replace this with their competition-specific logic."
}
```
- **Notes:** Swap the logic in `backend/app/services/logic.py` to match your challenge.
