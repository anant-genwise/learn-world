import React from 'react'

export default function Topbar() {
    return (
        <div style = {{padding: "20px", boxShadow: "0 2px 13px -1px rgba(0, 0, 0, 0.2)"}} >
            <div style = {{display: "flex", justifyContent: "right"}} >
                <div>
                    <img 
                         style = {{width: "20px"}}
                        src = "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-hand-dating-app-flaticons-lineal-color-flat-icons.png" 
                    />
                    My Referrals
                </div>
                <div style = {{display: "flex"}}>
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
