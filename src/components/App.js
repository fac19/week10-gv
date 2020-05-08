import React from 'react';
// import './App.css';
import getPokemon from "../utils/getPokemon";
import Landing from "./Landing";
import Game from "./Game"
import EndGame from "./EndGame"

function App() {
  // const [gameOn, setGameOn] = React.useState(false);
  // const [gameEnd, setGameEnd] = React.useState(false);
  const [gameState, setGameState] = React.useState("initial");
  const [pokemonData, setPokemonData] = React.useState([]);
  const [score, setScore]=React.useState(0);

  React.useEffect(()=>{
    getPokemon(setPokemonData);
  }, [])
  
    if(pokemonData.length === 0){// So people can't press "start game" too early
      // if (gameState === "loading") return <h2>Loading...</h2>  
      return (<h2>Loading...</h2>)
    }  
    if(gameState === "initial"){
      return <Landing setGameState={setGameState}/>
    }
    if(gameState === "running"){
      return <Game score={score} setScore={setScore} pokemonData={pokemonData} gameState={gameState} setGameState={setGameState}/>
    }
    if(gameState === "end"){
      return <EndGame setGameState={setGameState} score={score} setScore={setScore}/>  
    }
}

export default App;
