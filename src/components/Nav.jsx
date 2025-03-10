import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">Home</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/login" className="nav-link active" aria-current="page" href="#">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link active" aria-current="page" href="#">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}