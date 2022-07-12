import React, {useEffect, useState} from 'react'
import styles from "./overview.module.css"
import CourseLessonAnimation_bottom from "../../Images/CourseLessonAnimation_bottom.svg"
import CourseLessonAnimation_top from "../../Images/CourseLessonAnimation_top.svg"
import videoIcon from "../../Images/video.svg"
import pdfIcon from "../../Images/pdf.svg"
import quizIcon from "../../Images/quiz.svg"
import axios from 'axios'
import { useNavigate } from 'react-router'

export default function Overview() {
    const [data, setData] = useState([])
    const navigate  = useNavigate()


    useEffect(() => {
       axios.get("http://127.0.0.1:8000/course-lesson")
            .then((res) => setData(res.data) )
    }, [])

    return (
        <div>
            <div className = {styles.first} >
                <div>
                    <div>
                        Basics of Android App Development Course
                    </div>
                    <div>
                        Comprehensive Android Development Basics. 
                    </div>
                    <div>
                        App-solutely Free
                    </div>
                </div>
            </div>
            <div className = {styles.overviewHeader} >Course Overview</div>
            <div className = {styles.overviewContent} >
                <div>
                    <img src = "https://cdn-icons-png.flaticon.com/512/753/753344.png" />
                    <div>No prior coding experience or knowledge required</div>
                </div>
                <div>
                    <img src = "https://cdn-icons-png.flaticon.com/512/753/753344.png" />
                    <div>Learn at your own pace</div>
                </div>
                <div>
                    <img src = "https://cdn-icons-png.flaticon.com/512/753/753344.png" />
                    <div>Guided Video Lectures</div>
                </div>
                <div>
                    <img src = "https://cdn-icons-png.flaticon.com/512/753/753344.png" />
                    <div>Approx. 70 minutes to complete</div>
                </div>
                <div>
                    <img src = "https://cdn-icons-png.flaticon.com/512/753/753344.png" />
                    <div>Certification on completion</div>
                </div>
            </div>
            <div>
                <div 
                    className = {styles.courseLesson}
                >
                    <img style = {{color: "#DA0A36",  transform: "scaleX(-1)",}}  src = {CourseLessonAnimation_top} />
                    <div className = {styles.header} >Course Lessons</div>
                    {
                        data?.map((item, index) => {
                            return(
                                <div 
                                    onClick = {() => navigate("/android")}
                                    className = {styles.moduleCont} >
                                    <div>
                                        <div className = {styles.index} > {index < 10? `0${index+1}` : index+1 } </div>
                                        <div> {item.topicName} </div>
                                        <div className = {styles.free} >free</div>
                                    </div>
                                    {
                                        item.videos?.map(video => {
                                            return(
                                                <div>
                                                    <img src = {videoIcon} />
                                                    <div> {video.name} </div>
                                                </div>
                                            )
                                        })
                                    }
                                    {console.log(item.pdf)}
                                    {
                                        item.pdf?.map((pdf, index) => {
                                            return(
                                                <div>
                                                    <img src = {pdfIcon} />
                                                    <div> {pdf.name} </div>
                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        item.quiz?.map((quiz, index) => {
                                            return(
                                                <div>
                                                    <img src = {quizIcon} />
                                                    <div> {quiz.question} </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    <img 
                        style = {{color: "#DA0A36", height: "300px", width: "100%", marginTop: "-100px"}}  
                        src = {CourseLessonAnimation_bottom} 
                    />
                </div>
            </div>
            <div className = {styles.footer} >
                <img src = "https://lwfiles.mycourse.app/masai-school-public/283427801ef0376bad3f197fad544f38.png" />
                <div></div>
            </div>
            
        </div>
    )
}
