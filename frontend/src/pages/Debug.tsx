import { useState } from 'react'
import { API_BASE_URL, DemoResponse, getHealth, postDemo } from '../api/client'

const Debug = () => {
  const [health, setHealth] = useState<string | null>(null)
  const [demo, setDemo] = useState<DemoResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const pingHealth = async () => {
    setError(null)
    try {
      const res = await getHealth()
      setHealth(JSON.stringify(res))
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to reach backend'
      setError(message)
    }
  }

  const runDemo = async () => {
    setError(null)
    try {
      const res = await postDemo({ text: 'debug request', value: 3 })
      setDemo(res)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to call /demo'
      setError(message)
    }
  }

  return (
    <div className="card">
      <h2 className="section-title">Debug tools</h2>
      <p className="muted">Base URL: {API_BASE_URL}</p>
      <div style={{ display: 'flex', gap: '0.75rem', margin: '1rem 0' }}>
        <button onClick={pingHealth}>Ping /health</button>
        <button onClick={runDemo}>Send sample /demo</button>
      </div>
      {error && <div className="alert error">{error}</div>}
      {health && !error && (
        <div className="code-box" style={{ marginTop: '0.5rem' }}>
          <strong>/health</strong>
          <pre style={{ margin: '0.25rem 0 0' }}>{health}</pre>
        </div>
      )}
      {demo && !error && (
        <div className="code-box" style={{ marginTop: '0.5rem' }}>
          <strong>/demo</strong>
          <pre style={{ margin: '0.25rem 0 0' }}>{JSON.stringify(demo, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default Debug
