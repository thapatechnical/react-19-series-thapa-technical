import { useReducer } from "react";

export const ReducerComp = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  //   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className=" p-4 h-lvh flex flex-col justify-center items-center ">
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};
