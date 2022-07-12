import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoursePage from '../Components/CoursePage/CoursePage'
import Dashboard from '../Components/Dashboard/Dashboard'
import { Login } from '../Components/Login/Login'
import Overview from '../Components/Overview/Overview'

export const Index = () => {
    return (
        <div>
            <Routes>
                <Route path = "/" exact element={<Login />} />
                <Route path = "/android" exact element={<CoursePage />} />
                <Route path = "/dashboard" exact element={<Dashboard/>} />
                <Route path = "/overview" exact element={<Overview/>} />
            </Routes>
        </div>
    )
}