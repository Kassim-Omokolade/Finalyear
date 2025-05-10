import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminPrivate = ({role}) => {
    const token = localStorage.getItem('token')
    const content = token ? <Outlet /> : <Navigate to="/admin/login" />
  return content
}

export default AdminPrivate