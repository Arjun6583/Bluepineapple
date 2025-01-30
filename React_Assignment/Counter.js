import { useState } from "react";

function Counter() {
  const [count, incrementCount] = useState(0);
  return (
    <>
      <h1>Total Number of time you click: {count}</h1>
      <button
        onClick={() => {
          incrementCount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
}
export default Counter;
