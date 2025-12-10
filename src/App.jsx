import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header>
        <h1>React Preview Demo</h1>
        <p className="subtitle">Zero-config PR previews with GitHub Actions</p>
      </header>

      <main>
        <div className="card">
          <h2>Counter Demo</h2>
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p className="hint">
            Click the button to test interactivity
          </p>
        </div>

        <div className="info">
          <h3>How it works</h3>
          <ol>
            <li>Push code to GitHub</li>
            <li>Open a pull request</li>
            <li>GitHub Actions builds and deploys</li>
            <li>Get a public preview URL in PR comments</li>
          </ol>
        </div>

        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>Zero configuration needed</li>
            <li>No Cloudflare account required</li>
            <li>Automatic HTTPS via Quick Tunnels</li>
            <li>Preview URLs expire with workflow</li>
          </ul>
        </div>
      </main>

      <footer>
        <p>
          Powered by{' '}
          <a href="https://github.com/jonasneves/serverless-infra" target="_blank" rel="noopener noreferrer">
            serverless-infra
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
