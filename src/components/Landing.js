import React from "react"

const Landing = (props) => {
  const [username, setUsername] = React.useState("Ash")

  const startHandler = () => {
    props.setGameOn(true);
    localStorage.setItem("user", username) //for testing only?
    localStorage.setItem("gameOn", true) // for testing only.
  }

  return (
    <div>
      <h1>Gotta catch'em all!</h1>
      <h3>How to play the game:</h3>
      <p>Do what Oli says, but don't listen to Gregor!</p>
      <form>
        <label>Your trainer name:</label>
        <input 
          id="username"
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}/>
        <button onClick={startHandler}>Start!</button>
        {/* should listen to submit, not click */}
      </form>
    </div>
  )
}

export default Landing