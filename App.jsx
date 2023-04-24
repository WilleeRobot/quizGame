import StartPage from "./Components/StartPage"
import Quiz from './Components/Quiz'
import {useState} from 'react'

const App = () => {
const [startGame, setStartGame] = useState(false)
           
    const startGameButtonClicked = () => {
        setStartGame(true)
    }
    return (
        <div className='App'>
            <img className="blob1" src="../assets/blob-yellow.png" />    
            <img className="blob2" src="../assets/blob-blue.png" />  
            {startGame ? <Quiz /> : <StartPage buttonHandler={startGameButtonClicked} />}
        </div>
    )
}

export default App