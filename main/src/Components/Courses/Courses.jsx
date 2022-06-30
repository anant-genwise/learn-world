import React from 'react'
import {useNavigate} from "react-router-dom"

export default function Courses() {

    let navigate = useNavigate()

    const handleRedirect = (params) => {
        console.log(params)
        navigate(params)
    }

    return (
        <div style = {{textAlign: "left", padding: "30px"}}>
            <h3>Explore Courses</h3>
            <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}} >
                <div style = {{textAlign: "left", width: "500px", border: "1px solid #e5e5e5", borderRadius: "16px"}} >
                    <img 
                        style = {{objectFit: "cover", width: "100%", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} 
                        src= "https://lwfiles.mycourse.app/masai-school-public/494b0e1d808a519df3829336cf0ed940.png" 
                    />
                    <div style = {{padding: "20px", fontSize: "16px", fontWeight: 400}} >
                        <div style = {{height: "200px"}} >
                            <div style = {{fontSize: "24px", fontWeight: "700", marginBottom: "10px"}} > Basics of Android Certificate Course</div>
                            <p style = {{color: "#544d4f", lineHeight: "24px"}} >Learn the fundamentals of data analytics without having prior experience </p>
                        </div>

                        <div style = {{display: "flex", justifyContent: "space-between"}}>
                            <div style = {{marginTop: "20px"}} > &#8377; Free</div>
                            <button 
                                onClick = {() => handleRedirect("/android")}
                                style = {{backgroundColor: "#3470e3", padding: "10px 15px", color: 'white', fontWeight: 600, border: "none", borderRadius: "6px"}} 
                            >
                                ENROLL
                            </button>
                        </div>
                    </div>
                </div>
                <div style = {{textAlign: "left", width: "500px", border: "1px solid #e5e5e5", borderRadius: "16px"}} >
                    <img 
                        style = {{objectFit: "cover", width: "100%", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} 
                        src= "https://lwfiles.mycourse.app/masai-school-public/494b0e1d808a519df3829336cf0ed940.png" 
                    />
                    <div style = {{padding: "20px", fontSize: "16px", fontWeight: 400}} >
                        <div style = {{height: "200px"}} >
                            <div style = {{fontSize: "24px", fontWeight: "700", marginBottom: "10px"}} > Basics of Data Analytics Certificate Course</div>
                            <p style = {{color: "#544d4f", lineHeight: "24px"}} >Learn the fundamentals of data analytics without having prior experience </p>
                        </div>

                        <div style = {{display: "flex", justifyContent: "space-between"}}>
                            <div style = {{marginTop: "20px"}} > &#8377; Free</div>
                            <button 
                                style = {{backgroundColor: "#3470e3", padding: "10px 15px", color: 'white', fontWeight: 600, border: "none", borderRadius: "6px"}} 
                            >
                                ENROLL
                            </button>
                        </div>
                    </div>
                </div>
                <div style = {{textAlign: "left", width: "500px", border: "1px solid #e5e5e5", borderRadius: "16px"}} >
                    <img 
                        style = {{objectFit: "cover", width: "100%", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} 
                        src= "https://lwfiles.mycourse.app/masai-school-public/494b0e1d808a519df3829336cf0ed940.png" 
                    />
                    <div style = {{padding: "20px", fontSize: "16px", fontWeight: 400}} >
                        <div style = {{height: "200px"}} >
                            <div style = {{fontSize: "24px", fontWeight: "700", marginBottom: "10px"}} > Basics of Data Analytics Certificate Course</div>
                            <p style = {{color: "#544d4f", lineHeight: "24px"}} >Learn the fundamentals of data analytics without having prior experience </p>
                        </div>

                        <div style = {{display: "flex", justifyContent: "space-between"}}>
                            <div style = {{marginTop: "20px"}} > &#8377; Free</div>
                            <button 
                                style = {{backgroundColor: "#3470e3", padding: "10px 15px", color: 'white', fontWeight: 600, border: "none", borderRadius: "6px"}} 
                            >
                                ENROLL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
