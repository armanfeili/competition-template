import { FormEvent, useState } from 'react'
import { DemoRequest, DemoResponse, postDemo } from '../api/client'

interface DemoFormProps {
  onResult: (data: DemoResponse) => void
  onError: (message: string | null) => void
  setLoading: (state: boolean) => void
}

const DemoForm = ({ onResult, onError, setLoading }: DemoFormProps) => {
  const [text, setText] = useState('Hello judges')
  const [value, setValue] = useState(2)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const payload: DemoRequest = { text, value: Number(value) }
    setLoading(true)
    onError(null)
    try {
      const result = await postDemo(payload)
      onResult(result)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong'
      onError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3 className="section-title">Try the demo</h3>
      <p className="muted">Send a request to the FastAPI backend and see the computed response.</p>
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            id="text"
            type="text"
            value={text}
            placeholder="Type something memorable"
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="value">Value</label>
          <input
            id="value"
            type="number"
            value={value}
            min={0}
            step={0.1}
            onChange={(e) => setValue(Number(e.target.value))}
            required
          />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button type="submit">Submit to backend</button>
        </div>
      </div>
    </form>
  )
}

export default DemoForm
