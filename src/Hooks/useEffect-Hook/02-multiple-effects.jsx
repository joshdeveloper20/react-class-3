import { useState, useEffect } from "react";

function MultiEffects() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    const sayHello = () => {
      console.log("Hello from the first UseEffect");
    };

    sayHello();
  }, [count]);

  useEffect(() => {
    const sayHello = () => {
      console.log("Hello from the second useEffect");
    };

    sayHello();
  }, []);

  return (
    <div>
      <h1>First Value {count}</h1>
      <button type="button" className="btn" onClick={() => setCount(count + 1)}>
        click
      </button>

      <h1>Second Value {secondCount}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => setSecondCount(secondCount + 1)}
      >
        click
      </button>
    </div>
  );
}

export default MultiEffects;
