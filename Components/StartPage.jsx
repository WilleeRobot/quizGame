const StartPage = ({buttonHandler}) => {
    return (
        <div className='startpage-container'>
            <h1>Quizzical</h1>
            <p>Feeling smart today? See how you do with this quick 5 question quiz. Start the quiz below!</p>
            <button className="buttonStyle" onClick={buttonHandler}>Start quiz</button>
        </div>           
    )
}

export default StartPage