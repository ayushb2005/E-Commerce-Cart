import React from 'react'
import { Navigate } from 'react-router'
function ErrorPage() {
  return (
    <div>
      {alert("404 Page Not Found")}
      <Navigate to ='/'/>
    </div>
  )
}

export default ErrorPage