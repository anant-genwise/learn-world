import React, {useState} from 'react'
import CoursePageNav from './CoursePageNav/CoursePageNav'
import styles from "./coursePage.module.css"
import doubleRightArrow from "../../Images/doubleRightArrow.svg"
import VideoPlayers from "./VideoPlayer/VideoPlayers"

export default function CoursePage() {
    const [isNavOpen, setIsNavOpen] = useState(true)

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen)
    }

    console.log(isNavOpen)
    return (
        <div style = {{display: "flex"}} >
            <CoursePageNav isNavOpen = {isNavOpen} setIsNavOpen= {setIsNavOpen}  />

            <div>
                <div className = {styles.topbar} >
                {
                    !isNavOpen &&  
                        <div className = {styles.arrowCont} onClick = {toggleNavbar} >
                            <img src = {doubleRightArrow} width = "20px" />
                        </div>
                }
                    <div className = {styles.carouselBtns}>
                        <div>
                            <img src = "https://cdn-icons-png.flaticon.com/128/860/860790.png" />
                            previous
                        </div>
                        <div>
                            next
                            <img src = "https://cdn-icons-png.flaticon.com/128/709/709586.png" />
                        </div>
                    </div>
                </div>
                <VideoPlayers />
            </div>
        </div>
    )
}
