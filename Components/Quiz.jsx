import Question from './Question'
import Divider from './Divider'
import React, {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'

const Quiz = () => {
    // STATES
    const [questions, setQuestions] = useState([])
    const [correctCount, setCorrectCount] = useState(0)
    const [isQuizOver, setIsQuizOver] = useState(false);
    const [newGame, setNewGame] = useState(false);
    
    // useEffects
    useEffect(()=>{
        const getData = async () => {
            const res = await fetch('https://opentdb.com/api.php?amount=5');
            const data = await res.json()
            const questionBank = data.results.map(data => {
                let questionsArray = data.incorrect_answers;
                questionsArray.push(data.correct_answer)
                return {
                    id: nanoid(),
                    question: data.question,
                    answers: questionsArray,
                    correctAnswer: data.correct_answer,
                    userAnswer: "",
                    isSelected: false,
                }
            })
            setQuestions(questionBank)
        }
        
        getData().catch(console.error)
        return () => {
            setNewGame(false)
        }
    }, [newGame])
    
    // HANDLER FUNCTIONS
    const selectedAnswerHandler = (questionId, userAnswer) => {
        setQuestions(prevQuestions => {
            
            let updatedState = prevQuestions.map(question => question.id == questionId ? 
                Object.assign(
                        {}, 
                        question, 
                        {userAnswer : userAnswer}
                    ) : 
                question)
                
            return updatedState
        })
    }
    
    const onButtonClick = () => {
        if (isQuizOver == false) {
            setIsQuizOver(true)          
        }
        if (isQuizOver == true) {
            setIsQuizOver(false)
            setNewGame(true)
        }
    }
    
    const getCorrectTotal = () => {
        return questions.filter(question => {
            return question.correctAnswer === question.userAnswer
        }).length
    }

    // RENDER FUNCTIONS        
    const showQuestions = questions.map((question)=> {
        return (
                <React.Fragment key={nanoid()}>
                    <Question 
                        id={question.id} 
                        data={question} 
                        isQuizOver={isQuizOver} 
                        changeUserAnswer={selectedAnswerHandler}
                        userAnswer={question.userAnswer}
                    />
                    <Divider />
                </React.Fragment>
        )
    })
    return (
        <div className='quiz-container'>
            {showQuestions}
            <div className='controls-holder'>
                {isQuizOver && <p>You scored {getCorrectTotal()} out of {questions.length} correct answers</p>}
                <button onClick={onButtonClick} className='buttonStyle'>{isQuizOver ? "Play again" : "Check answers"}</button>
            </div>
        </div>
    )
}

export default Quiz