import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { url } from "../../conf";

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [navigate, setNavigate] = useState(false)

    const submit = async (e) => {
        e.preventDefault()
        console.log
        const response = await fetch(`${url}/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })

        return response.ok ? setNavigate(true) : alert('Login failed')
    }

    if (navigate) {
        return <Navigate to="/" />
    }

    return (
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <input type="email" className="form-control" placeholder="name@example.com" required onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />

            <button className="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Sign in</button>
        </form>
    )
}