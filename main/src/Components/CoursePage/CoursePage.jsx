import React, {useState, useEffect} from 'react'
import CoursePageNav from './CoursePageNav/CoursePageNav'
import styles from "./coursePage.module.css"
import doubleRightArrow from "../../Images/doubleRightArrow.svg"
import VideoPlayers from "./VideoPlayer/VideoPlayers"
import axios from "axios"
import { getCurrState } from '../Redux/actions'
import {useDispatch, useSelector} from 'react-redux'

export default function CoursePage({val}) {
    const [isNavOpen, setIsNavOpen] = useState(true)
    const [content, setContent] = useState([])
    const [activeVideo, setActiveVideo] = useState("")
    const dispatch = useDispatch()
    // const state = useSelector((state) => state.state)

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen)
    }

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/").then((res) => {
            setContent(res.data)
            setActiveVideo(res.data[0])
        })

        // dispatch(getCurrState("ASBC"))

    }, [])
 

    return (
        <div style = {{display: "grid", gridTemplateColumns: isNavOpen? "24% 74%": "100%"}} >
            <CoursePageNav 
                isNavOpen = {isNavOpen} 
                setIsNavOpen= {setIsNavOpen} 
                content = {content} 
                activeVideo = {activeVideo}
                setActiveVideo = {setActiveVideo}
            />

            <div>
                <div className = {styles.topbar} >
                {
                    !isNavOpen &&
                        <div className = {styles.arrowCont} onClick = {toggleNavbar} >
                            <img src = {doubleRightArrow} width = "20px" />
                        </div>
                }
                    <div className = {styles.carouselBtns}>
                        <div onClick = {() => setActiveVideo(content[content.indexOf(activeVideo) -1])} >
                            <img src = "https://cdn-icons-png.flaticon.com/128/860/860790.png" />
                            <span>previous</span>
                        </div>
                        <div onClick = {() => setActiveVideo(content[content.indexOf(activeVideo) +1])} >
                            <span>next</span> 
                            <img src = "https://cdn-icons-png.flaticon.com/128/709/709586.png" />
                        </div>
                    </div>
                </div>
                <VideoPlayers videoLink = {activeVideo.url} />
            </div>
        </div>
    )
}
