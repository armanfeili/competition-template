const About = () => {
  return (
    <div className="card">
      <h2 className="section-title">About this template</h2>
      <p className="muted">
        Built with FastAPI on the backend and React + Vite + TypeScript on the frontend. Everything is intentionally
        lightweight so teams can focus on the competition problem instead of plumbing.
      </p>
      <ul>
        <li>Backend: FastAPI with a tiny service layer in `backend/app/services/logic.py`.</li>
        <li>Frontend: Hash-based navigation, modular components, and a centralized API client.</li>
        <li>Docs: Architecture, pitch outline, and challenge notes are ready for judges or teammates.</li>
      </ul>
      <h3 className="section-title" style={{ marginTop: '1rem' }}>How to customize</h3>
      <ol>
        <li>Change request/response models in `backend/app/models/schemas.py`.</li>
        <li>Implement your business logic in `backend/app/services/logic.py`.</li>
        <li>Adjust form fields in `frontend/src/components/DemoForm.tsx` and result view in `DemoResult.tsx`.</li>
        <li>Update content and routes in `frontend/src/pages`.</li>
      </ol>
    </div>
  )
}

export default About
