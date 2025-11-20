export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
const API_PREFIX = '/api'

export interface DemoRequest {
  text: string
  value: number
}

export interface DemoResponse {
  text: string
  value: number
  processed_text: string
  score: number
  details: string
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || 'Request failed')
  }
  return response.json() as Promise<T>
}

export async function getHealth(): Promise<{ status: string }> {
  const response = await fetch(`${API_BASE_URL}/health`)
  return handleResponse(response)
}

export async function postDemo(payload: DemoRequest): Promise<DemoResponse> {
  const response = await fetch(`${API_BASE_URL}${API_PREFIX}/demo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  return handleResponse(response)
}
