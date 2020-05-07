import React from "react";
import Question from "./Question";
import Human from "./Human";

const Game = ({gameEnd, setGameEnd}) => {
  setTimeout(()=>{
    setGameEnd(true);
  }, 24000)
  return (
    <div>
      <Question />
      <Human />
    </div>
  )
}

export default Game