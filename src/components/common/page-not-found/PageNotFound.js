import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>404 Not Found</h1>
      <button onClick={() => navigate("/home")}>
        Home
      </button>
    </div>
  )
}
