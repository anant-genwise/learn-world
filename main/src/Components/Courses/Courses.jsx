import React from 'react'

export default function Courses() {
    return (
        <div style = {{textAlign: "left", padding: "30px"}}>
            <h3>Explore Courses</h3>
            <div style = {{textAlign: "left", width: "400px", border: "1px solid grey", borderRadius: "20px"}} >
                <img src= "https://www.prepleaf.com/analytics/tech.svg" />
                <div style = {{padding: "20px"}} >
                    <h3>Basics of Data Analytics Certificate Course</h3>
                    <p>Learn the fundamentals of data analytics without having prior experience </p>

                    <div style = {{display: "flex", justifyContent: "space-between", marginTop: "80px"}}>
                        <div style = {{marginTop: "20px"}} > &#8377; Free</div>
                        <button 
                            style = {{backgroundColor: "#3470e3", padding: 15, color: 'white', fontWeight: 600, border: "none", borderRadius: "10px"}} 
                        >
                            ENROLL
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
