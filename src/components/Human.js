import React from "react";

const Human = () => {
  return (
    <form>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
    </form>
  )
}

const Button = (props) => {
  const [pokemon, setPokemon] = React.useState(null);
  const pokemonName = "pikachu"; 
    
  if(!pokemon){
    return <h1>loading...</h1>
  }
    
  const handleChange = event => setPokemon(event.target.value);

  return (
    <label>
      <input
        type="radio"
        name="pokemon"
        value={pokemonName}
        checked={pokemon === pokemonName}
        onChange={handleChange}
      />
    </label>
  )
}

export default Human