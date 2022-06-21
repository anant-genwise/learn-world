import React, { Component } from 'react'
import Courses from '../Courses/Courses'
import Leftbar from '../Leftbar/Leftbar'
import Topbar from '../Topbar/Topbar'

export default class Dashboard extends Component {
    render() {
        return (
            <div style = {{display: "flex"}} >
                <div>
                    <Leftbar />
                </div>
                <div style = {{width: "100%"}}>
                    <Topbar />
                    <Courses />
                </div>
            </div>
        )
    }
}
