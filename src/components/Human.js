import React from "react";

const Human = ({pokeDataArr, setUserGuess, userGuess, setRound, round, question, score, setScore}) => {
  // const [questionArr, setQuestionArr]= React.useState([])
  
  React.useEffect(() => {
    // setQuestionArr(questionArr => {
    //   questionArr.push(question)
    //   return questionArr
    // });
    if(userGuess === question) {
      // questionArr[questionArr.length-2]
      // setQuestionArr(questionArr => questionArr.shift());
      console.log("user guess correct")
      setScore(score => score+1)
    }else{
      console.log({userGuess, question})
      //console.log("question is:", question)
      console.log("user guess incorrect")
    }
  }, [userGuess])
 
  return (
    <section>
      {pokeDataArr.map(poke => (
        <Button score={score} setScore={setScore} question={question} userGuess={userGuess} setRound={setRound} round={round} setUserGuess={setUserGuess} key={poke.id} name={poke.name} img={poke.img} />
        ))}
        <Button score={score} setScore={setScore} question={question} userGuess={userGuess} setRound={setRound} round={round} setUserGuess={setUserGuess}>Skip</Button>
    </section>
  )
}

const Button = ({name, img, children, setRound, question, setScore, setUserGuess}) => {
  const clickHandler = (event)=>{
    setUserGuess(event.target.alt)
    setRound(round => round+1);
   
    //   if(userGuess === question) {
    //     // questionArr[questionArr.length-2]
    //     // setQuestionArr(questionArr => questionArr.shift());
    //     console.log("user guess correct")
    //     setScore(score => score+1)
    //   }else{
    //     console.log({userGuess, question})
    //     //console.log("question is:", question)
    //     console.log("user guess incorrect")
    //   }
    // }
  }

  return (
     <div> 
       <p>{name}</p>
      <button onClick={clickHandler}>
        {children || <img src={img} alt={name}/>}
      </button>
    </div>
  )
}

export default Human