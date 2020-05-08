import React from "react";

const EndGame = ({score, setGameState}) => {
  const startGameHandler = ()=>{
    setGameState("running")
  }
  const homeHandler = () => {
    setGameState("initial")    
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