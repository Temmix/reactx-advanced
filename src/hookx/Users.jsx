import React, { useState, useEffect } from "react";
import axios from "axios";

// if you want to use Hooks with Redux, check the Redux-all project (BugList for example)
function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // useEffect does not allow async func, so we cannot pass one in
    // but ffg the ffg style and call the function explicitly
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }
    getUsers();
  });

  return (
    <div>
      <h5> Fetching Users from servers using hooks</h5>
      <ul>
        {users.map(user => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
