import React from 'react';
import './App.css';
import getPokemon from "../utils/getPokemon";
import Landing from "./Landing";
import Game from "./Game/Game"
import EndGame from "./EndGame"

function App() {
  const [gameState, setGameState] = React.useState("initial");
  const [pokemonData, setPokemonData] = React.useState([]);
  const [score, setScore]=React.useState(0);
  const [round, setRound] = React.useState(0);

  React.useEffect(()=>{
    getPokemon(setPokemonData);
  }, [])
  
    if(pokemonData.length === 0){// So people can't press "start game" too early
      // if (gameState === "loading") return <h2>Loading...</h2>  
      return (<img className="loading" src="https://media.giphy.com/media/j2xgBIuAgmrpS/giphy.gif" alt="Loading..." />)
      /* other possible loading gifs:
        https://pokeres.bastionbot.org/pokeball.gif
      */
    }  
    if(gameState === "initial"){
      return <Landing setGameState={setGameState}/>
    }
    if(gameState === "running"){
      return <Game score={score} setScore={setScore} pokemonData={pokemonData} setGameState={setGameState} round={round} setRound={setRound}/>
    }
    if(gameState === "end"){
      return <EndGame setGameState={setGameState} score={score} setScore={setScore} round={round} setRound={setRound}/>  
    }
}

export default App;
