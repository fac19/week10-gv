import React from "react";
import './Game.css';

const Human = ({pokeDataArr, setUserGuess, userGuess, setRound, round, question, score, setScore, children}) => {


  let buttonArr = []
  for(let i=0; i<5; i++){
    let pokeName = pokeDataArr[i].name;
    let pokeId = pokeDataArr[i].id;
    let pokeImg = pokeDataArr[i].img;
    let pokeClass = "pokeButton" + i;
    let CSSclass = `button ${pokeClass}`
    buttonArr.push(<Button CSSclass={CSSclass} key={pokeId} name={pokeName} img={pokeImg} score={score} setScore={setScore} question={question} userGuess={userGuess} setRound={setRound} round={round} setUserGuess={setUserGuess} />);
  }

  return (
    <section className="pokeButtonContainer">
        {buttonArr}
        <Button CSSclass="button skip" score={score} setScore={setScore} question={question} userGuess={userGuess} setRound={setRound} round={round} setUserGuess={setUserGuess}>
          SKIP
        </Button>
        {children} {/* Note that the children here renders <Question/> */}
    </section>
  )
}

const Button = ({CSSclass, name, img, children, setRound, question, setScore, setUserGuess}) => {
  const clickHandler = (event)=>{
    const newUserGuess = name
    setUserGuess(newUserGuess)
    setRound(round => round+1);
      if(newUserGuess === question) {
        setScore(score => score+1)
      }
  }
  
  return (
      <button className={CSSclass} onClick={clickHandler}>
        {children || <img className="pokeImg" src={img} alt={name}/>}
      </button>
  )
}

export default Human