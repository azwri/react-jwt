import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <input type="email" className="form-control" placeholder="name@example.com" />
          <input type="password" className="form-control" placeholder="Password" />

          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
      </main>
    </>
  )
}

export default App
