import React, { Component } from 'react'
import Certificate from '../Certificate/Certificate'
import Courses from '../Courses/Courses'
import Leftbar from '../Leftbar/Leftbar'
import Topbar from "../Topbar/Topbar"
import {useSelector} from "react-redux"

export default function Dashboard() {

    const isAuth = useSelector(state => state.isAuth)

    console.log(isAuth)

    return (
        <div style = {{display: 'flex'}} >
            <div >
                <Leftbar />
            </div>
            <div style = {{width: "100%"}}>
                <Topbar />
                <Courses />
                <Certificate />
            </div>
        </div>
    )
    
}

