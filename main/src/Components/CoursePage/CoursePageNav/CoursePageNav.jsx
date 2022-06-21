import React, {useEffect, useState} from 'react'
import leftArrow from "../../../Images/leftArrow.svg"
import doubleLeftArrow from "../../../Images/doubleLeftArrow.svg"
import styles from "./style.module.css"
import 'antd/dist/antd.less';
import { Progress } from 'antd';
import youtube from "../../../Images/youtube.svg"

export default function CoursePageNav({isNavOpen, setIsNavOpen}) {

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
                <div>
                    <img src = {youtube} />
                    <div>Lecture 1</div>
                </div>
                <div>
                    <img src = {youtube} />
                    <div>Lecture 2</div>
                </div>
                <div>
                    <img src = {youtube} />
                    <div>Lecture 3</div>
                </div>
                <div>
                    <img src = {youtube} />
                    <div>Lecture 4</div>
                </div>
            </div>
            
        </div>
    )
}
