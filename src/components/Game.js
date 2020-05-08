import React from "react";
import Question from "./Question";
import Human from "./Human";
import arrOfRandomNum from "../utils/randomNum"

const Game = ({gameEnd, setGameEnd, pokemonData, score, setScore}) => {
  const [userGuess, setUserGuess] = React.useState(null); //for use by Human and Body
  const [round, setRound] = React.useState(0);
 
  setTimeout(()=>{
    setGameEnd(true);
  }, 24000)

let arrOfRandomNumbers = arrOfRandomNum(5, pokemonData.length);
let pokeDataArr = arrOfRandomNumbers.map(randNum => pokemonData[randNum])

function randomQuestion() {
  const randomNum = Math.floor(Math.random() * pokeDataArr.length)
  return pokeDataArr[randomNum].name;
}
let question = randomQuestion()

if(!pokemonData){
  return null
}

  return (
    <div>
      <Question question={question} userGuess={userGuess} setUserGuess={setUserGuess}/>
      <Human score={score} setScore={setScore} question={question} userGuess={userGuess} setUserGuess={setUserGuess} round={round} setRound={setRound} pokeDataArr={pokeDataArr}/>
    </div>
  )
}

export default Game