import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from './contexts/ContextProvider'

const ProtectedRoutes = () => {

    const {auth} = useStateContext()

  return auth ? <Outlet /> : <Navigate to={`/signin`} />
}

export default ProtectedRoutes