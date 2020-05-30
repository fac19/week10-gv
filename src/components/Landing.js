import React from "react";
import "./Landing.css";

const Landing = ({setGameState, username, setUsername}) => {
  const startHandler = () => {
    setGameState("running");
  }

  return (
    <main class="landing">
      <h1 class="landing__header">Gotta catch 'em all!</h1>
      <h3>How to play the game:</h3>
      <p class="landing__p">Do what Oli says as fast as you can!</p>
      <form class="landing__form" onSubmit={startHandler}>
        <label>Your trainer name:</label>
        <input 
          id="username"
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}/>
          <p>You have 24s starting...</p>
        <button class="landing__button" type="submit">Now!</button>
      </form>
    </main>
  )
}

export default Landing