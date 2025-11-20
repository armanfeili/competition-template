import { DemoResponse } from '../api/client'

interface DemoResultProps {
  result: DemoResponse | null
  loading: boolean
  error?: string | null
}

const DemoResult = ({ result, loading, error }: DemoResultProps) => {
  return (
    <div className="card" style={{ marginTop: '1rem' }}>
      <h3 className="section-title">Result</h3>
      {loading && <p className="muted">Processing...</p>}
      {error && <div className="alert error">{error}</div>}
      {!loading && !error && !result && <p className="muted">Submit the form to see structured output.</p>}
      {result && !error && (
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <div className="alert success">Backend responded successfully.</div>
          <div className="code-box">
            <div>text: {result.text}</div>
            <div>value: {result.value}</div>
            <div>processed_text: {result.processed_text}</div>
            <div>score: {result.score}</div>
            <div>details: {result.details}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DemoResult
