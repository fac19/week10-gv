import React from "react";

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
      <h2>Oli says <span>catch the {question}!</span></h2>
  )
}

export default Question