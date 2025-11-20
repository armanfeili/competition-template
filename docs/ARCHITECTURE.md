# Architecture Overview

## High level
- React + Vite + TypeScript frontend communicates with FastAPI backend over HTTP.
- Backend exposes `/health` and `/api/demo` by default; extend with new routers.
- No database by default; any state is in memory. Swap to SQLite/Postgres when needed.

## Backend
- Entry point: `backend/app/main.py` creates the FastAPI app, sets CORS, and mounts routers.
- API routing: `backend/app/api/routes.py` defines `/demo` and is the place for new endpoints. 
- Settings: `backend/app/core/config.py` holds defaults for app name, API prefix, and CORS origins.
- Schemas: `backend/app/models/schemas.py` defines Pydantic request/response models.
- Business logic: `backend/app/services/logic.py` has `process_demo` as a placeholder for challenge-specific logic.

### Extending
1) Add new request/response models in `backend/app/models/schemas.py`.
2) Implement logic in `backend/app/services/*`.
3) Wire endpoints in `backend/app/api/routes.py` and include them in `main.py` as needed.

## Frontend
- Entry point: `frontend/src/main.tsx` boots React and global styles.
- App shell/routing: `frontend/src/App.tsx` uses hash-based navigation to switch pages.
- Layout: `frontend/src/components/Layout.tsx`, `Header.tsx`, `Footer.tsx` wrap pages.
- Pages: `frontend/src/pages/Home.tsx` (demo + explainer), `About.tsx` (stack/customization), `Debug.tsx` (manual API pings).
- API client: `frontend/src/api/client.ts` centralizes calls to the backend.

### Extending
1) Update `DemoRequest`/`DemoResponse` types and UI in `components/DemoForm.tsx` & `components/DemoResult.tsx`.
2) Add new pages under `frontend/src/pages` and route via hash links in `Header.tsx`/`App.tsx`.
3) Adjust base URL or endpoints in `frontend/src/api/client.ts` (use `VITE_API_BASE_URL`).

## Data flow
1) User fills `DemoForm` in Home.
2) Form posts to backend `/api/demo` via `postDemo` helper.
3) Backend processes request in `process_demo` and returns a deterministic response.
4) UI renders result in `DemoResult`.

## Deploy considerations
- Use Docker Compose for local demos: builds backend and frontend containers.
- For production, put the backend behind a reverse proxy and serve the built frontend via CDN or static host.
