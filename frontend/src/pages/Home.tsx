import DemoForm from '../components/DemoForm'
import DemoResult from '../components/DemoResult'
import { DemoResponse } from '../api/client'

interface HomeProps {
  demoResult: DemoResponse | null
  onResult: (data: DemoResponse) => void
  loading: boolean
  error: string | null
  setError: (message: string | null) => void
  setLoading: (state: boolean) => void
}

const Home = ({ demoResult, onResult, loading, error, setError, setLoading }: HomeProps) => {
  return (
    <div className="grid">
      <div className="card">
        <span className="badge">Ready for hackathons</span>
        <h2 className="section-title">A competition starter kit you can finish in a day</h2>
        <p className="muted">
          Use this template to skip boilerplate and focus on your challenge. Swap in your business logic on the
          backend and adjust the form/results on the frontend. Everything else is wired for you.
        </p>
        <div className="grid" style={{ marginTop: '1rem' }}>
          <div className="code-box">
            <strong>Backend</strong>
            <pre style={{ margin: '0.25rem 0 0' }}>uvicorn app.main:app --reload</pre>
          </div>
          <div className="code-box">
            <strong>Frontend</strong>
            <pre style={{ margin: '0.25rem 0 0' }}>npm install && npm run dev</pre>
          </div>
        </div>
      </div>

      <div>
        <DemoForm onResult={onResult} onError={setError} setLoading={setLoading} />
        <DemoResult result={demoResult} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default Home
