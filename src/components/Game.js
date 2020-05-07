import React from "react";
import Question from "./Question";
import Human from "./Human";

const Game = ({gameEnd, setGameEnd, pokemonData}) => {
  const [userGuess, setUserGuess] = React.useState(null); //for use by Human and Body


  // setTimeout(()=>{
  //   setGameEnd(true);
  // }, 24000)
  return (
    <div>
      <Question userGuess={userGuess} setUserGuess={setUserGuess} />
      <Human userGuess={userGuess} setUserGuess={setUserGuess} pokemonData={pokemonData}/>
    </div>
  )
}

export default Game