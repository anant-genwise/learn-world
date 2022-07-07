import axios from 'axios'
import React, {useState} from 'react'
import styles from "./quiz.module.css"

export default function Quiz({data}) {

    const [options, setOptions] = useState(data.options.split(", "))
    const [explanation, setExplanation] = useState(data.wrongAnsExplanation.split(", "))
    const [selectedOptions, setSelectedOptions] = useState([])

    const handleSelectOption = (index) => {
        if(selectedOptions.length === 0){
            axios.post("http://127.0.0.1:8000/quiz-submissions")
        }
        setSelectedOptions([...selectedOptions, options[index] ])
    }
    
    return (
        <div>
            <div className = {styles.question} >
                <div> {data.question} </div>
                <div>question 1/1</div>
            </div>
            <div className = {styles.question2} > {data.question} </div>
            <div>
                <div>
                    <div className = {styles.optionCont} >
                        {
                            options?.map((item, index) => {
                                return(
                                    <div>
                                        <div 
                                            className = {styles.option} 
                                            onClick = { () => handleSelectOption(index)}
                                        >
                                            <div 
                                                className = {styles.bullet}
                                                style = {{backgroundColor: selectedOptions[selectedOptions.length-1] === item ? "red" : "" }}
                                            ></div>
                                            <div>{options[index]}</div>
                                        </div>
                                        <div
                                            style = {{
                                                border: explanation[index] === "correct" ? "1px solid rgb(126, 169, 57)" : "1px solid rgb(195, 41, 41)" ,
                                                backgroundColor: explanation[index] === "correct" ? "#e5eed9" : "#f5d6d5",
                                                display: selectedOptions.includes(options[index]) ? "block" : "none"
                                            }}
                                            className = {styles.explanation}
                                        > 
                                            {explanation[index]} 
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
