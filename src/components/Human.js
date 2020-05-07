import React from "react";

const Human = ({pokeDataArr}) => {
  return (
    <form>
      {pokeDataArr.map(poke => (
        <Button key={poke.id} name={poke.name} img={poke.img} />
        ))}
        <Button>Skip</Button>
    </form>
  )
}

const Button = ({name, img, userGuess, setUserGuess, children}) => {

  const handleChange = event => setUserGuess(event.target.value);

  return (
    <label>
      <p>{name}</p>
      {children || <img src={img} alt={name}/>}
      <input
        type="radio"
        name="pokemon"
        value={name}
        checked={userGuess === name}
        onChange={handleChange}
      />
    </label>
  )
}

export default Human