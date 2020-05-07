import React from "react";
import Question from "./Question";
import Human from "./Human";

const Game = ({gameEnd, setGameEnd, pokemonData}) => {
  const [userGuess, setUserGuess] = React.useState(null); //for use by Human and Body
  const [round, setRound] = React.useState(0);

  setTimeout(()=>{
    setGameEnd(true);
  }, 24000)

  /*
    useEffect which listens to userGuess change (and renders whole game again).
  */

 function randomNumbers(length) {
  return Array.from({ length }, () => {
    const randomNum = Math.floor(Math.random() * pokemonData.length)
    return randomNum;
  })
} //NEED TO IMPROVE GENERATOR TO MAKE RANDOM NUMBERS UNIQUE
// 1) Generate array of posible numbers, e.g. 1 -> 20
// E.g. const arrOfNumbers = Array.from... -> generate
// 2) generate random number between 0-19, pop that out of the array and save it in new array
// 3) generate the next random number between 0-18, pop that out...
// 4) repeat in a loop 

let arrOfRandomNum = randomNumbers(5);
let pokeDataArr = arrOfRandomNum.map(randNum => pokemonData[randNum])

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
      <Question question={question} userGuess={userGuess} setUserGuess={setUserGuess} round={round} setRound={setRound}/>
      <Human pokeDataArr={pokeDataArr} round={round} setRound={setRound}/>
    </div>
  )
}

export default Game