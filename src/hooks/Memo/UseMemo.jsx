import { useMemo, useState } from "react";

// eslint-disable-next-line react/display-name
const ExpensiveComponent = () => {
  //   Expensive calculation function
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(() => sum(), []);

  //   const total = sum();

  return <p> sum: {total} </p>;
};

const MemoParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white ">
      <ExpensiveComponent />
      <button
        onClick={() => setCount(count + 1)}
        className="py-3 px-6 bg-cyan-400 rounded-sm"
      >
        Re-render Parent
      </button>
      <p>Parent re-renders: {count}</p>
    </div>
  );
};

export default MemoParentComponent;
