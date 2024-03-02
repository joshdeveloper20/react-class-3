import { useState } from "react";

function UseStateObject() {
  const [person, setPerson] = useState({
    name: "peter",
    age: 22,
    hobby: "coding",
  });

  console.log(person);

  const handleUpdate = () => {
    // setPerson({ name: "John", age: 18, hobby: "Reading" });
    setPerson({ ...person, hobby: "Reading" });
  };

  return (
    <div>
      <h2>My name is {person.name}</h2>
      <h2>I am {person.age} years old.</h2>
      <h2>I love {person.hobby}.</h2>

      <button type="button" className="btn" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

export default UseStateObject;
