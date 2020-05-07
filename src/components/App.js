import React from 'react';
// import './App.css';
import getPokemon from "../utils/getPokemon";
import Landing from "./Landing";

console.log(getPokemon())

function App() {
  const [gameOn, setGameOn] = React.useState(false)

  return (
      <Landing gameOn={gameOn} setGameOn={setGameOn}/>
  );
}

export default App;
