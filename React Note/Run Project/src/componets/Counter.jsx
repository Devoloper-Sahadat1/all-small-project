import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");
  function MouseOver() {
    let count = counter + 2;
    setCounter(count);
    setMessage("")
  }
  function handLess() {
    if (counter > 0) {
      let lessCount = counter - 1;
      setCounter(lessCount);
      setMessage("")
    } else {
      // document.getElementById("txt").innerHTML = "kisui pari na";
      setMessage("it's below zoro ")
    }
  }

  return (
    <div>
      <h1>{counter}</h1>
      <h1 id="txt">{message} </h1>
      <button className="btn btn-primary" onClick={MouseOver}>
        increse
      </button>
      <button className="btn btn-primary" onClick={handLess}>
        deccrese
      </button>
    </div>
  );
};

export default Counter;
