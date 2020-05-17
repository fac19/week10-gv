import React from "react";
import './Game.css';


const Question = ({ question }) => {
  /* A
  1. put round state in game.js
  2. put round state into question props
  3. enter result of random number generator into below.
  stretch 4. each time round changes call random oli/gregor generator (in use effect?)
*/
/* B
  1. get pokemon from pokemonDataArr. DONE (need a new state?)
  2. give one of these pokemon [PIKACHU] randomly to Oli/Gregor 
  stretch 3. if its Gregor, check if userGuess is skip
  stretch 4. else compare userGuess with [PIKACHU]
  stretch 5. save result in a new state (result state)
*/

  return (
    <div className="questionContainer">
      <h2 className="dictator">Oli says</h2>
      <h2 className="question">Catch {question}!</h2>
    </div>
  )
}

export default Question