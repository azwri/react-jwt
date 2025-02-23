import React from "react";
import { url } from "../../conf";
import { Navigate } from "react-router-dom";

export default function Register() {
    const [fullName, setFullName] = React.useState(null)
    const [email, setEmail] = React.useState(null)
    const [password, setPassword] = React.useState(null)
    const [redirect, setRedirect] = React.useState(false)

    const submit = async (e) => {
        e.preventDefault()
        console.log(fullName, email, password)

        const response = await fetch(`${url}/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "full_name": fullName,
                "email": email,
                "password": password
            })
        })

        return response.ok ? setRedirect(true) : alert('Registration failed')
    }

    if (redirect) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            <form>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <input type="text" className="form-control" placeholder="Name" required onChange={(e) => setFullName(e.target.value)} />
                <input type="email" className="form-control" placeholder="name@example.com" required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />

                <button className="btn btn-primary w-100 py-2" type="submit" onClick={submit}>Register</button>
            </form>

        </div>
    )
}