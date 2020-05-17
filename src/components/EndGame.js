import React from "react";

const EndGame = ({score, setScore, round, setRound, setGameState}) => {
  const startGameHandler = ()=>{
    setGameState("running");
    setScore(0);
    setRound(0);
  }
  const homeHandler = () => {
    setGameState("initial");
    setScore(0);
    setRound(0);    
  }
  return (
    <section>
      <h2>Time is up!</h2>
      <p>Scores: {score}</p>
      <p>Number of Rounds played: {round}</p>
      <button onClick={startGameHandler}>Start Game again!</button>
      <button onClick={homeHandler}>Go Home!</button>
    </section>
  )
}

export default EndGame