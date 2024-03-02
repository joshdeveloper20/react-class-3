import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

function FetchData() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Call the API when component
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, avatar_url, html_url, login } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FetchData;
