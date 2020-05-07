import React from 'react';
// import './App.css';
import getPokemon from "../utils/getPokemon";
import Landing from "./Landing";
import Game from "./Game"
import EndGame from "./EndGame"

function App() {
  const [gameOn, setGameOn] = React.useState(false);
  const [gameEnd, setGameEnd] = React.useState(false);
  const [pokemonData, setPokemonData] = React.useState([]);

  React.useEffect(()=>{
    console.log("useEffect");
    getPokemon(setPokemonData);
  }, [])

  const AppContent = React.useMemo(()=>{
    // Logic: if pokemon data array length is 0, return a "loading" screen so people can't press "start game" too early
    if(gameOn && !gameEnd){
      return <Game gameEnd={gameEnd} setGameEnd={setGameEnd}/>
    }
    if(gameEnd){
      return <EndGame />  
    }
    return <Landing gameOn={gameOn} setGameOn={setGameOn}/>
  }, [gameOn, gameEnd])

    return(<div>{AppContent}</div>)
}

export default App;
