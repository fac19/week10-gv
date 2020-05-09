import React from "react";
import Question from "./Question";
import Human from "./Human";
import arrOfRandomNum from "../../utils/randomNum";

const Game = ({setGameState, pokemonData, score, setScore, round, setRound}) => {
  const [userGuess, setUserGuess] = React.useState(null); //for use by Human and Body
  
  React.useEffect(()=>{
    const duration = setTimeout(()=>{
      setGameState("end");
    }, 24000);
    return () => clearTimeout(duration);
  }, [])

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
      <Human score={score} setScore={setScore} question={question} userGuess={userGuess} setUserGuess={setUserGuess} round={round} setRound={setRound} pokeDataArr={pokeDataArr}>
        <Question question={question}/>
      </Human>
    </div>
  )
}

export default Game