import React from 'react';
// import './App.css';
import getPokemon from "../utils/getPokemon";
import Landing from "./Landing";
import Game from "./Game"
import EndGame from "./EndGame"

console.log(getPokemon())

function App() {
  const [gameOn, setGameOn] = React.useState(false)
  const [gameEnd, setGameEnd] = React.useState(false)
  
  return (
      <div>
      {gameOn && !gameEnd ? 
        <Game gameEnd={gameEnd} setGameEnd={setGameEnd}/> : (gameEnd ? 
          <EndGame /> : <Landing gameOn={gameOn} setGameOn={setGameOn}/>)}
      </div>
  );
}

export default App;
