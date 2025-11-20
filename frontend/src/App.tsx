import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Debug from './pages/Debug'
import { DemoResponse } from './api/client'

type Route = '/' | '/about' | '/debug'

const resolveRoute = (): Route => {
  const hash = window.location.hash.replace('#', '') || '/'
  return hash === '/about' || hash === '/debug' ? (hash as Route) : '/'
}

const App = () => {
  const [route, setRoute] = useState<Route>(resolveRoute())
  const [demoResult, setDemoResult] = useState<DemoResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleHashChange = () => setRoute(resolveRoute())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (path: Route) => {
    window.location.hash = path
    setRoute(path)
  }

  return (
    <Layout currentRoute={route} onNavigate={navigate}>
      {route === '/about' && <About />}
      {route === '/debug' && <Debug />}
      {route === '/' && (
        <Home
          demoResult={demoResult}
          onResult={(data) => setDemoResult(data)}
          loading={loading}
          error={error}
          setError={setError}
          setLoading={setLoading}
        />
      )}
    </Layout>
  )
}

export default App
