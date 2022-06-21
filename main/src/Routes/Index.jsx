import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoursePage from '../Components/CoursePage/CoursePage'
import Dashboard from '../Components/Dashboard/Dashboard'

export const Index = () => {
    return (
        <div>
            <Routes>
                <Route path = "/" exact element={<CoursePage/>} />
            </Routes>
        </div>
    )
}