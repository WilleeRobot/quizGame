import React, {useState} from 'react'
import {nanoid} from 'nanoid'

const Question = ({data, isQuizOver, changeUserAnswer, id, userAnswer}) => {
    // destructured incoming data props
    const {question, correctAnswer, answers} = data
  
    // Define inline styles for questions on game end
    const correctAnswerStyle = {
        opacity: "100%",
        backgroundColor: "#94D7A2",
        border: "none",
    }    
    
    const incorrectAnswerStyle = {
        opacity: "100%",
        backgroundColor: "#F8BCBC",
        border: "none",
    }
    
    const greyedOut = {
        opacity: "50%"
    }
    
    // handler functions
    const onOptionChange = (event) => {
        const userAnswer = event.target.value
        changeUserAnswer(id, userAnswer)
    }
   
    const handleEndStyling = (correctAnswer, answer, userAnswer) => {
            if(correctAnswer == answer) {
                return correctAnswerStyle
            } 
            if ((answer == userAnswer) && (answer != correctAnswer)) {
                return incorrectAnswerStyle
            }
            return {}            
    }
    
    // Render functions
    const answersRendered = answers.map(answer => {
        const id = nanoid()
        return (
            <React.Fragment key={nanoid()}>
                <input 
                    className='radioInput'
                    type='radio' 
                    id={id} 
                    value={answer} 
                    name="theAnswer"
                    checked={userAnswer == answer}
                    onChange={onOptionChange}
                    disabled={isQuizOver}
                />
                    
                <label 
                    htmlFor={id}
                    className={`label ${answer === userAnswer && "checked"}`}
                >{answer}</label>
            </React.Fragment>
        )
    })
    
    const quizOverAnswersRendered = answers.map(answer => {
        const id = nanoid()
        return (
            <React.Fragment key={nanoid()}>
                <label
                    className='label answered'
                    value={answer}
                    style={handleEndStyling(correctAnswer, answer, userAnswer)}
                >
                    {answer}
                </label>
            </React.Fragment>            
        )
    })
    return (
        <>
            <h2 className='question'>{question}</h2>
            <div className='options-container'>
                {isQuizOver ? quizOverAnswersRendered : answersRendered}
            </div>           
        </>
    )
}

export default Question