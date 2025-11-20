## 1. Recommended scope & repo structure (1-day feasible)

**Stack (keep it simple):**

* Backend: **FastAPI + Python** (no DB at first, in-memory or JSON file)
* Frontend: **Vite + React + TypeScript**
* Storage: **In-memory or local JSON file**; optionally SQLite if really needed
* Dev tooling:

  * `uvicorn` for backend dev server
  * `npm run dev` for frontend
  * Minimal testing: `pytest` (backend), maybe 1–2 React tests with Vitest/Jest if time permits
* Containerization: **single docker-compose** (backend + frontend) – nothing more

**Target repo layout:**

```text
competition-template/
  README.md
  TODO.md
  .gitignore

  backend/
    app/
      __init__.py
      main.py
      api/
        __init__.py
        routes.py
      core/
        config.py
      models/
        __init__.py
        schemas.py
      services/
        __init__.py
        logic.py
    tests/
      test_health.py
    requirements.txt

  frontend/
    index.html
    package.json
    tsconfig.json
    vite.config.ts
    src/
      main.tsx
      App.tsx
      api/
        client.ts
      components/
        Layout.tsx
        Header.tsx
        Footer.tsx
        DemoForm.tsx
        DemoResult.tsx
      pages/
        Home.tsx
        About.tsx
        Debug.tsx
    src/tests/ (optional)

  docker-compose.yml
  Dockerfile.backend
  Dockerfile.frontend

  docs/
    ARCHITECTURE.md
    CHALLENGE_NOTES_TEMPLATE.md
    PITCH_OUTLINE.md
    API_REFERENCE.md
```

Now the **TODO** for Copilot.

---

## 2. Complete TODO list for Copilot (ready to paste)

Copy everything below into `TODO.md` in the repo:

---

# Competition Template – Initial Scaffolding TODO

Goal:
Create a **generic competition template** that can be used for any 1-day hackathon/competition, with:

* FastAPI backend
* React + Vite + TypeScript frontend
* Simple, clean architecture
* Ready documentation for judges (README, architecture, pitch outline)
* Easy local run (`docker-compose up` or two simple commands)

The template must be **simple enough to fully implement in one day**, but structured enough to be professional.

---

## Phase 1 – Repository Basics

* [x] Initialize the repository structure:

  * [x] Create root files:

    * [x] `README.md` – high-level description of the template
    * [x] `TODO.md` – this file with tasks
    * [x] `.gitignore` – Python, Node, and IDE ignores

  * [x] Add root documentation folder:

    * [x] `docs/ARCHITECTURE.md`
    * [x] `docs/CHALLENGE_NOTES_TEMPLATE.md`
    * [x] `docs/PITCH_OUTLINE.md`
    * [x] `docs/API_REFERENCE.md`

* [x] Update `README.md` with:

  * [x] Purpose of the template (“hackathon/competition scaffold”)
  * [x] Stack overview (FastAPI + React/Vite/TS)
  * [x] Quick start section (dev commands)
  * [x] Structure overview (backend/frontend/docs)
  * [x] How to adapt the template to a new challenge (steps)

---

## Phase 2 – Backend (FastAPI)

### 2.1 Backend skeleton

* [x] Create `backend/` folder with structure:

  * [x] `backend/app/__init__.py`
  * [x] `backend/app/main.py`
  * [x] `backend/app/api/__init__.py`
  * [x] `backend/app/api/routes.py`
  * [x] `backend/app/core/__init__.py`
  * [x] `backend/app/core/config.py`
  * [x] `backend/app/models/__init__.py`
  * [x] `backend/app/models/schemas.py`
  * [x] `backend/app/services/__init__.py`
  * [x] `backend/app/services/logic.py`
  * [x] `backend/tests/test_health.py`
  * [x] `backend/requirements.txt`

### 2.2 Minimal FastAPI app

* [x] In `backend/app/core/config.py`, define a simple settings object:

  * [x] App name
  * [x] API prefix (e.g., `/api`)
  * [x] CORS origins (allow localhost:5173 by default)

* [x] In `backend/app/main.py`:

  * [x] Create a FastAPI app instance
  * [x] Include router from `api/routes.py`
  * [x] Enable CORS with default settings for local development
  * [x] Add root route `/` returning a simple JSON with app info
  * [x] Add `/health` endpoint returning status `"ok"`

* [x] In `backend/app/api/routes.py`:

  * [x] Create APIRouter
  * [x] Define a sample endpoint `/demo`:

    * [x] Accepts a simple input schema (e.g., text and numeric value)
    * [x] Returns some deterministic “processed” result based on input
  * [x] Tag endpoints for future API docs (`tags=["demo"]`)

* [x] In `backend/app/models/schemas.py`:

  * [x] Define Pydantic models:

    * [x] `DemoRequest`
    * [x] `DemoResponse`

* [x] In `backend/app/services/logic.py`:

  * [x] Implement a `process_demo(request: DemoRequest) -> DemoResponse` function:

    * [x] Simple synchronous logic that can later be replaced with challenge-specific logic

### 2.3 Backend tests

* [x] In `backend/tests/test_health.py`:

  * [x] Create a basic pytest test using `TestClient`:

    * [x] Ensure `/health` returns 200 and correct JSON
    * [x] Optionally, test `/demo` basic behaviour

* [x] Update `backend/requirements.txt` with:

  * [x] `fastapi`
  * [x] `uvicorn[standard]`
  * [x] `pydantic`
  * [x] `pytest`
  * [x] `httpx` (if needed for testing)

---

## Phase 3 – Frontend (React + Vite + TypeScript)

### 3.1 Frontend skeleton

* [x] Create `frontend/` folder with Vite + React + TS:

  * [x] `frontend/package.json`
  * [x] `frontend/tsconfig.json`
  * [x] `frontend/vite.config.ts`
  * [x] `frontend/index.html`
  * [x] `frontend/src/main.tsx`
  * [x] `frontend/src/App.tsx`
  * [x] `frontend/src/api/client.ts`
  * [x] `frontend/src/components/Layout.tsx`
  * [x] `frontend/src/components/Header.tsx`
  * [x] `frontend/src/components/Footer.tsx`
  * [x] `frontend/src/components/DemoForm.tsx`
  * [x] `frontend/src/components/DemoResult.tsx`
  * [x] `frontend/src/pages/Home.tsx`
  * [x] `frontend/src/pages/About.tsx`
  * [x] `frontend/src/pages/Debug.tsx` (optional, for testing API)

### 3.2 API client

* [x] In `frontend/src/api/client.ts`:

  * [x] Export a configurable `API_BASE_URL` (default: `http://localhost:8000`)
  * [x] Provide helper functions:

    * [x] `getHealth()`
    * [x] `postDemo(payload)`
  * [x] Use `fetch` or `axios` with simple error handling

### 3.3 UI layout & pages

* [x] Implement `Layout.tsx` with:

  * [x] Header
  * [x] Main content area
  * [x] Footer

* [x] Implement `Header.tsx`:

  * [x] Title of the app (“Competition Template”)
  * [x] Simple nav (Home / About)

* [x] Implement `Footer.tsx`:

  * [x] Short text intended for judges (“Built for hackathons in 1 day”)

* [x] Implement `Home.tsx`:

  * [x] Copy explaining:

    * [x] What this template is for
    * [x] How it would be adapted to a real challenge
  * [x] Include `DemoForm` and `DemoResult` components

* [x] Implement `DemoForm.tsx`:

  * [x] A simple form with inputs matching `DemoRequest`
  * [x] On submit, call backend `/demo` via API client
  * [x] Pass response to parent callback

* [x] Implement `DemoResult.tsx`:

  * [x] Display the response data nicely
  * [x] Handle loading / error states

* [x] Implement `About.tsx`:

  * [x] Explain:

    * [x] Stack used
    * [x] How teams can customize template during competitions

* [x] Wire routing (either very simple router or manual conditional render in `App.tsx`).

---

## Phase 4 – Dev Experience & Running

* [x] In root `README.md` add clear **Quick Start**:

  * [x] Backend:

    * [x] `cd backend`
    * [x] `python -m venv .venv && source .venv/bin/activate` (or Windows equivalent)
    * [x] `pip install -r requirements.txt`
    * [x] `uvicorn app.main:app --reload`

  * [x] Frontend:

    * [x] `cd frontend`
    * [x] `npm install` or `yarn`
    * [x] `npm run dev` or `yarn dev`

  * [x] Notes about:

    * [x] Accessing frontend (e.g., `http://localhost:5173`)
    * [x] Backend API (e.g., `http://localhost:8000/api/...`)

* [x] Add root `docker-compose.yml` with:

  * [x] `backend` service:

    * [x] Build from `Dockerfile.backend`
    * [x] Expose port 8000

  * [x] `frontend` service:

    * [x] Build from `Dockerfile.frontend`
    * [x] Expose port 5173
    * [x] Environment variable for `API_BASE_URL` pointing to backend

* [x] Add `Dockerfile.backend`:

  * [x] Python base image
  * [x] Copy backend files
  * [x] Install requirements
  * [x] Start with `uvicorn app.main:app --host 0.0.0.0 --port 8000`

* [x] Add `Dockerfile.frontend`:

  * [x] Node base image
  * [x] Install dependencies
  * [x] Run `npm run build` and `npm run preview` (or dev server in simple mode)

---

## Phase 5 – Documentation for Competitions

### 5.1 Architecture

* [x] In `docs/ARCHITECTURE.md`:

  * [x] Describe:

    * [x] Overall architecture (frontend ↔ backend)
    * [x] Tech stack
    * [x] How to plug in challenge-specific logic:

      * [x] Where to implement business logic (`services/logic.py`)
      * [x] Where to adapt request/response schemas (`models/schemas.py`)
      * [x] Where to adjust frontend form and result display

### 5.2 Challenge notes template

* [x] In `docs/CHALLENGE_NOTES_TEMPLATE.md`:

  * [x] Provide sections:

    * [x] Challenge summary
    * [x] Users and needs
    * [x] MVP definition
    * [x] Chosen features
    * [x] Future improvements
    * [x] Assumptions and constraints

### 5.3 Pitch outline

* [x] In `docs/PITCH_OUTLINE.md`:

  * [x] Define a default 5–7 minute pitch structure:

    * [x] Problem
    * [x] Solution
    * [x] Demo walkthrough
    * [x] Architecture overview
    * [x] Impact and future work
    * [x] Team organization

### 5.4 API reference

* [x] In `docs/API_REFERENCE.md`:

  * [x] Document:

    * [x] `/health`
    * [x] `/demo`
    * [x] Request and response schemas

---

## Phase 6 – Minimal Polish

* [x] Add basic styling to frontend (simple CSS, no heavy framework).

* [x] Ensure CORS is correctly configured between frontend and backend.

* [x] Verify the end-to-end flow:

  * [x] Start backend
  * [x] Start frontend
  * [x] Submit form
  * [x] See result from backend

* [x] Make sure all commands and file paths in `README.md` are correct.

* [x] Optionally add a minimal GitHub Actions workflow (lint/test) if still within 1-day time budget (otherwise, skip).

---

**End of TODO**
