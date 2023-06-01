import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import CreateProject from '../pages/CreateProject'
import ProjectListing from '../pages/ProjectListing'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/create-project' element={<CreateProject/>} />
        <Route path='/project-list' element={<ProjectListing/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default AllRoutes