import React from "react";

const Human = ({pokemonData, userGuess}) => {
  
  function randomNumbers(length) {
    return Array.from({ length }, () => {
      const randomNum = Math.floor(Math.random() * pokemonData.length)
      return randomNum;
    })
  } //NEED TO IMPROVE GENERATOR TO MAKE RANDOM NUMBERS UNIQUE
  
  // 1) Generate array of posible numbers, e.g. 1 -> 20
  // E.g. const arrOfNumbers = Array.from... -> generate
  // 2) generate random number between 0-19, pop that out of the array and save it in new array
  // 3) generate the next random number between 0-18, pop that out...
  // 4) repeat in a loop 
  

  let arrOfRandomNum = randomNumbers(5);
  let pokeDataArr = arrOfRandomNum.map(randNum => pokemonData[randNum])
  
  if(!pokemonData){
    return null
  }

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