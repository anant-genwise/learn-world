import React from 'react'
import 'antd/dist/antd.css';
import {Popover } from 'antd';

export default function Topbar() {
    return (
        <div style = {{padding: "20px", boxShadow: "0 2px 13px -1px rgba(0, 0, 0, 0.2)"}} >
            <div style = {{display: "flex", justifyContent: "center"}} >
                <div style = {{display: "flex"}} >
                    <img 
                        style = {{width: "20px", marginRight: "10px"}}
                        src = "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-hand-dating-app-flaticons-lineal-color-flat-icons.png" 
                    />
                    <Popover placement="bottomRight" title={"title"} content={"profile"} trigger="hover">
                        <div>My Referrals</div>
                    </Popover>
                </div>
                <div style = {{display: "flex", marginLeft: "25px"}}>
                    <div>Pushkar</div>
                    <img
                         style = {{width: "20px"}} 
                        src = "https://img.icons8.com/material-sharp/344/expand-arrow--v1.png" 
                    />
                </div>
            </div>
        </div>
    )
}
