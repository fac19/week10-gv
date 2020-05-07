import React from "react";

const EndGame = ({score, setGameOn, setGameEnd}) => {
  const startGameHandler = ()=>{
    setGameEnd(false)
    setGameOn(true)
  }
  const homeHandler = () => {
    setGameOn(false)
    setGameEnd(false)
  }
  return (
    <div>
      <h2>Time is up!</h2>
      <p>Scores: {score}</p>
      <button onClick={startGameHandler}>Start Game again!</button>
      <button onClick={homeHandler}>Go Home!</button>
    </div>

  )
}

export default EndGame