import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState('checking...')
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    // Check API health
    fetch('http://localhost:8000/api/health')
      .then(res => res.json())
      .then(data => setApiStatus(data.status))
      .catch(() => setApiStatus('offline'))
  }, [])

  const fetchTheme = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/theme')
      const data = await response.json()
      setTheme(data)
    } catch (error) {
      console.error('Error fetching theme:', error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎵 Theme Creator</h1>
        <p>Create theme songs based on personality</p>
      </header>
      
      <main className="App-main">
        <div className="status-card">
          <h3>API Status</h3>
          <p className={`status ${apiStatus}`}>
            {apiStatus === 'healthy' ? '✅' : '❌'} {apiStatus}
          </p>
        </div>

        <div className="action-card">
          <button onClick={fetchTheme} className="theme-button">
            Generate Theme
          </button>
          {theme && (
            <div className="theme-result">
              <h3>Theme Result:</h3>
              <pre>{JSON.stringify(theme, null, 2)}</pre>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
