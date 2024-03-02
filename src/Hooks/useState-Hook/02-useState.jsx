import { useState } from "react";

function UseStateCount() {
  const [count, setCount] = useState(0);

  // Event to keep increasing the count by  1 every time it is clicked.

  const incrementByOne = () => {
    // console.log(count);
    // setCount(count + 1);
    setCount((prevCount) => {
      const curCount = prevCount + 1;
      // console.log(curCount);
      return curCount;
    });
  };

  const sayHello = () => {
    console.log("Say hello");
  };

  sayHello();

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button type="button" className="btn" onClick={incrementByOne}>
        click
      </button>
    </div>
  );
}

export default UseStateCount;
