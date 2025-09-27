// App.jsx

import './styles/App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  let updateScore = () => {
    setCurrentScore(currentScore + 1);
  }

  let resetGame = () => {
    const finalScore = currentScore + 1;

    if (finalScore > highScore) {
      setHighScore(finalScore);
    }
    setCurrentScore(0);
  }

  return (
    <>
      <div>
        <Header currentScore={currentScore} highScore={highScore} />
        <Cards currentScore={currentScore} updateScore={updateScore} resetGame={resetGame} />
      </div>
    </>
  )
}

export default App;