import React from "react";

const Countdown = () => {
  const [timer, setTimer] = React.useState(24);

  React.useEffect(() => {
    if(timer > 0){
      const countdown = setInterval(() => setTimer(timer -1), 1000);
      return () => clearInterval(countdown)
    };
  }, [timer]);
  
  return (
  <p>Time left: {timer} seconds</p>
  )
}

export default Countdown