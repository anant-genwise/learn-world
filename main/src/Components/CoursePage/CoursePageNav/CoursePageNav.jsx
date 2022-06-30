import React, {useEffect, useState} from 'react'
import leftArrow from "../../../Images/leftArrow.svg"
import doubleLeftArrow from "../../../Images/doubleLeftArrow.svg"
import styles from "./style.module.css"
import 'antd/dist/antd.less';
import { Progress } from 'antd';
import youtube from "../../../Images/youtube.svg"

export default function CoursePageNav({isNavOpen, setIsNavOpen, content, activeVideo, setActiveVideo}) {

    const [isTopicContentVisible, setIsTopicContentVisible] = useState(false)

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen)
    }

    useEffect(() => {
        var navbar = document.getElementById("navbar")
        console.log(document.getElementById("navbar"))
        if(!isNavOpen){
            navbar.style.display = "none"
        }
        else{
            navbar.style.display = "block"
        }
        
    }, [isNavOpen])

    console.log(activeVideo)

    return (
        <div className = {styles.main} id = "navbar" >
            <div className = {styles.red} >
                <div>
                    <div className = {styles.top} >
                        <div className = {styles.space} >
                            <img src = {leftArrow} width = "20px" />
                            <div>Back to course page</div>
                        </div>
                        <div onClick = {toggleNavbar} >
                            <img src = {doubleLeftArrow} width = "20px" />
                        </div>
                    </div>
                </div>
                <div className = {styles.moduleName} >Basics of Data Analytics Certificate Course</div>
                <div>
                    <Progress percent={30} strokeColor = "white" trailColor = "#f1919d" />
                </div>
            </div>

            <div className = {styles.topicLine} >
                <div>
                    {/* {
                        isTopicContentVisible ? 
                        <img className = {styles.icon} src = "https://cdn-icons-png.flaticon.com/512/130/130906.png" /> :
                        <img className = {styles.icon} src = "https://cdn-icons-png.flaticon.com/512/32/32195.png" />
                    }  */}
                </div>
                <div className = {styles.topicName} >
                    1. Excel
                </div>
            </div>
            <div className = {styles.content} >
                {
                    content?.map(item => {
                        return(
                            <div style = {{borderLeft: activeVideo.id === item.id ? "4px solid #da0a35": ""}} onClick = {() => setActiveVideo(item) } >
                                <div>
                                    <img src = {youtube} />
                                    <div> {item.name} </div>
                                </div>
                                {
                                    activeVideo.id === item.id  ? 
                                    <div>
                                        <img width = "20px"  src = "https://img.icons8.com/fluency-systems-filled/344/checkmark.png" />
                                    </div> : ""
                                }
                            </div>
                            
                        )
                    })
                }
            </div>
            
        </div>
    )
}
