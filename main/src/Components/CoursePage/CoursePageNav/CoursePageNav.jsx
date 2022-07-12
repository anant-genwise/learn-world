import React, {useEffect, useState} from 'react'
import leftArrow from "../../../Images/leftArrow.svg"
import doubleLeftArrow from "../../../Images/doubleLeftArrow.svg"
import styles from "./style.module.css"
import 'antd/dist/antd.less';
import { Button, Progress } from 'antd';
import youtube from "../../../Images/youtube.svg"
import axios from 'axios';
import Certificate from '../../Certificate/Certificate';
import Modal from 'antd/lib/modal/Modal';

export default function CoursePageNav({isNavOpen, setIsNavOpen, content, activeVideo, setActiveVideo}) {

    const [isTopicContentVisible, setIsTopicContentVisible] = useState(false)
    const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem("user")))
    const [contentProgress, setContentProgress] = useState([])
    const [activeVideoIndex, setActiveVideoIndex] = useState(0)
    const [quiz, setQuiz] = useState([])
    const [isDownload, setIsDownload] = useState(false)
    const [isElegibleForCertificate, setIsEligibleForCertificate] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen)
    }

    const updateActiveVideo = (videoObj, index) => {
        var prevVideoComplete = false
        contentProgress.forEach(item => {
            console.log(item.content_id, content[index-1].id)
            if(item.content_id === content[index-1].id){
                prevVideoComplete = true
            }
        })

        console.log(videoObj)
        if(prevVideoComplete || index === 0){
            setActiveVideo(videoObj)
            const payload = {
                completed: true,
                content_id: videoObj.id,
                user_id: userDetails.uid,
                type: videoObj.type
            }

            var isCompleted = false

            contentProgress.forEach(el => {
                if(el.content_id === videoObj.id ){
                    isCompleted = true
                }
            })

            if(!isCompleted){
                axios.post("http://127.0.0.1:8000/add-progress", payload)
            }

        }
    }

    const evaluateCertificateEligibility = () => {
        var quizContentProgress
        axios.get("http://127.0.0.1:8000/quiz-submissions")
            .then(res => {
                console.log(res.data)
                quizContentProgress = res.data.filter(item => item.isCorrect === true)
            })
            .then(() => {
                var totalQuiz = content.filter(item => item.type === "quiz")

                if(Math.floor((quizContentProgress?.length/totalQuiz.length)*100) >= 70){
                    setIsEligibleForCertificate(true)
                }
            })
       
    }

    const downloadCertificate = () => {
        if(isElegibleForCertificate ){
            setIsDownload(true)
        }
        else{
           setIsModalVisible(true)
        }
    }
 
    const handleOk = () => {
        setIsModalVisible(false);
      };
    
    const handleCancel = () => {
    setIsModalVisible(false);
    };

    const handleReattempt = () => {
        
    }

    useEffect(() => {
        var navbar = document.getElementById("navbar")
        if(!isNavOpen){
            navbar.style.display = "none"
        }
        else{
            navbar.style.display = "block"
        }
        
    }, [isNavOpen])


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/progress")
            .then(res => {
                var data = res.data.filter(item => item.user_id === userDetails.uid )
                setContentProgress(data)
            })
            .then(() => {
                evaluateCertificateEligibility()
            })

    }, [contentProgress])

    useEffect(() => {
        var isCompleted = false

        contentProgress.forEach(el => {
            if(el.content_id === activeVideo.id ){
                isCompleted = true
            }
        })

        if(!isCompleted){
            const payload =  {
                completed: true,
                content_id: activeVideo.id,
                user_id: userDetails.uid
            }
            axios.post("http://127.0.0.1:8000/add-progress", payload)
        }
    }, [])

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
                    <Progress percent={Math.floor((contentProgress.length/content.length)*100)} strokeColor = "white" trailColor = "#f1919d" />
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
                    content?.map((item, index) => {
                        return(
                            <div
                                style = {{
                                    borderLeft: activeVideo.id === item.id ? "4px solid #da0a35": "",
                                    opacity: contentProgress.filter(el => el.content_id ===  item.id).length > 0 || index === 0 ? "100%" : "30%"
                                }} 
                                onClick = {() => updateActiveVideo(item, index) } >
                                <div>
                                    <img 
                                        src = { item.type === "video" ? 
                                        youtube : item.type === "pdf" ? 
                                        "https://cdn-icons-png.flaticon.com/512/482/482216.png" : "https://cdn-icons-png.flaticon.com/128/7889/7889390.png" } 
                                        alt = "icon"
                                    />
                                    <div> {item.name} </div>
                                </div>
                                {
                                    activeVideo.id === item.id || contentProgress.filter(el => el.content_id ===  item.id).length > 0 || index === 0  ? 
                                    <div>
                                        <img width = "20px" height = "20px" src = "https://cdn-icons-png.flaticon.com/512/753/753344.png" />
                                    </div> : ""
                                }
                            </div>
                            
                        )
                    })
                }
                <div>
                    <div
                        style = {{opacity: isElegibleForCertificate ? "100%" : "30%"  }}
                    >
                        <img src = "https://cdn-icons-png.flaticon.com/512/3135/3135722.png" />
                        <div
                            onClick = {downloadCertificate}
                        > 
                            Download Certificate 
                        </div>
                    </div>
                    <Certificate isDownload = {isDownload} setIsDownload = {setIsDownload} />
                </div>
            </div>

            <Modal visible={isModalVisible} onCancel={handleCancel} onOk = {handleOk} width = "50%" >
                <div>Sorry, you haven't completed all the quiz questions with 70% accuracy required for the certificate. </div>
                <div>Please complete the quiz or re-aatempt the course</div>
                <Button style = {{marginTop: "20px"}} >Re-Attempt</Button>
            </Modal>
        </div>
    )
}
