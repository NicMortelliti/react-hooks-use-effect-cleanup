import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Returning a cleanup function that will
    // halt this function running in the background
    // when the timer is removed from the page
    return function cleanup() {
      console.log("Clearup timer code");
      clearInterval(timerID);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
