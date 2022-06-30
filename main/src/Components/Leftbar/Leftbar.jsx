import React from 'react'
import styles from "./style.module.css"

export default function Leftbar() {
    return (
        <div className = {styles.leftbar} >
            <div className = {styles.imgCont} >
                <img src = "https://www.masaischool.com/img/navbar/logo.svg" alt = "masai" />
            </div>
            <div className = {styles.nav} >
                <div>
                    <img 
                        src = "https://img.icons8.com/ios-glyphs/344/graduation-cap--v1.png" 
                        className = {styles.img}
                    />
                    <div>Courses</div>
                </div>
                <div>
                    <img 
                        src = "https://img.icons8.com/ios-glyphs/344/trophy.png" 
                        className = {styles.img}
                    />
                    <div>Contents</div>
                </div>
                <div>
                    <img 
                        src = "https://img.icons8.com/material-rounded/344/calendar--v1.png" 
                        className = {styles.img}
                    />
                    <div>Events</div>
                </div>
                <div>
                    <img 
                        src = "https://img.icons8.com/ios/344/open-book.png" 
                        className = {styles.img}
                    />
                    <div>Self Learning</div>
                </div>

            </div>
        </div>
    )
}
