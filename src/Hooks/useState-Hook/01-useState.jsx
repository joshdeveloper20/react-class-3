import { useState } from "react";

function UseStateBasics() {
  const [name, setName] = useState("peter");

  // Events in React
  //   function handleClick() {
  //     console.log("Button was clicked!");
  //     setName("John  Doe");
  //   }

  return (
    <div>
      <h1>My name is {name}</h1>
      <button className="btn" onClick={() => setName("John Doe")}>
        Change Name
      </button>
    </div>
  );
}

export default UseStateBasics;
