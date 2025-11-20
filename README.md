# Competition Template

A one-day competition scaffold with a FastAPI backend and a React + Vite + TypeScript frontend. It ships with Docker support, docs for judges, and a demo flow you can swap with your challenge logic.

## Stack
- Backend: FastAPI (Python), CORS enabled for `http://localhost:5173`
- Frontend: React + Vite + TypeScript
- Storage: In-memory placeholder; upgrade to JSON/SQLite/Postgres as needed
- Dev tools: `uvicorn` for backend, `npm run dev` for frontend, pytest for backend tests

## Quick start (local)
- Backend:
  1) `cd backend`
  2) `python -m venv .venv && source .venv/bin/activate` (Windows: `.\.venv\Scripts\activate`)
  3) `pip install -r requirements.txt`
  4) `uvicorn app.main:app --reload`
- Frontend:
  1) `cd frontend`
  2) `npm install`
  3) `npm run dev` (opens on `http://localhost:5173`)
- API base: `http://localhost:8000` with routes `/health` and `/api/demo`

## Quick start (Docker)
- `docker-compose up --build`
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`

## Repository structure
```
competition-template/
  README.md
  TODO.md
  .gitignore
  docker-compose.yml
  Dockerfile.backend
  Dockerfile.frontend
  docs/
  backend/
  frontend/
```

## Adapting to a new challenge
1) Backend models: edit `backend/app/models/schemas.py`.
2) Backend logic: implement challenge-specific code in `backend/app/services/logic.py`.
3) API routes: wire new endpoints in `backend/app/api/routes.py`.
4) Frontend form/result: adjust `frontend/src/components/DemoForm.tsx` and `DemoResult.tsx`.
5) Content & pages: update copy in `frontend/src/pages` and navigation in `frontend/src/components/Header.tsx`.

## Testing
- Backend: `cd backend && pytest`
- Frontend: add Vitest/React Testing Library tests in `frontend/src/tests` if needed.
