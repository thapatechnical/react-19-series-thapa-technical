import "../Hooks.css";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleINcrement = () => {
    setCount(count + 1);
    console.log("inner", count);
  };

  console.log("outer", count);

  return (
    <div className="container state-container " style={{ textAlign: "center" }}>
      <h1>useState Hook!</h1>
      <br />
      <p>{count}</p>
      <button className="state-button" onClick={handleINcrement}>
        Increment
      </button>
    </div>
  );
};
