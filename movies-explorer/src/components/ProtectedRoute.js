import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoute({ authorized, children }) {
    if (!authorized) {
        return <Navigate to="/" replace />
    }
    return children
}
export default ProtectedRoute
