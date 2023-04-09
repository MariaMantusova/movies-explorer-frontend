import React from 'react'
import { useNavigate } from 'react-router-dom'
function ProtectedRoute({ authorized, children }) {
    const navigate = useNavigate();

    if (!authorized) {
        return navigate('/')
    }

    return children
}
export default ProtectedRoute;
