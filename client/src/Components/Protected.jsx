import React, { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { Navigate, Outlet } from "react-router-dom"

const Protected = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default Protected
