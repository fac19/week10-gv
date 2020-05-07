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
    if(pokemonData.length === 0){// So people can't press "start game" too early
      return (<h2>Loading...</h2>)
    }  
    if(gameOn && !gameEnd){
      return <Game gameEnd={gameEnd} setGameEnd={setGameEnd}/>
    }
    if(gameEnd){
      return <EndGame />  
    }
    return <Landing gameOn={gameOn} setGameOn={setGameOn}/>
  }, [gameOn, gameEnd, pokemonData])

    return(<div>{AppContent}</div>)
}

export default App;
