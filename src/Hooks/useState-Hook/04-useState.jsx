import { useState } from "react";
import { data } from "../../data";

function Persons() {
  const [person, setPerson] = useState(data);

  const removeSingleUser = (id) => {
    const filterUser = person.filter((user) => user.id !== id);
    setPerson(filterUser);
  };

  return (
    <section>
      {person.map((user) => {
        const { id, name } = user;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button
              type="button"
              className="btn"
              onClick={() => removeSingleUser(id)}
            >
              delete user
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPerson([])}>
        Clear All
      </button>
    </section>
  );
}

export default Persons;

/**
 * user.id: 1, 2, 3, 4
 * id: 1
 */
