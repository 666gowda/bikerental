import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <button onClick={() => navigate("/home")}>
            Home
        </button>
      </div>
    </div>
  )
}
