import React from "react";

const Human = ({pokeDataArr, setUserGuess, userGuess, setRound, round, question, score, setScore}) => {
 
  return (
    <section>
      {pokeDataArr.map(poke => (
        <Button score={score} setScore={setScore} question={question} userGuess={userGuess} setRound={setRound} round={round} setUserGuess={setUserGuess} key={poke.id} name={poke.name} img={poke.img} />
        ))}
        <Button score={score} setScore={setScore} question={question} userGuess={userGuess} setRound={setRound} round={round} setUserGuess={setUserGuess}>Skip</Button>
    </section>
  )
}

const Button = ({name, img, children, setRound, question, setScore, userGuess, setUserGuess}) => {
  const clickHandler = (event)=>{
    const newUserGuess = name
    setUserGuess(newUserGuess)
    setRound(round => round+1);
      if(newUserGuess === question) {
        setScore(score => score+1)
      }
  }
  
  return (
      <button onClick={clickHandler}>
        <p>{name}</p>
        {children || <img src={img} alt={name}/>}
      </button>
  )
}

export default Human