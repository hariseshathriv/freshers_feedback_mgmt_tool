// Users.js
import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://localhost:3001/api/users/get-mentees/1"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Users</h2>
      <h3>{JSON.stringify(users.mentees)}</h3>
      <h3>{typeof users.mentees}</h3>
      <ul>
        {/* {Object.entires(users.mentees)?.map((key, user) => (
          <li key={key}>{user.name}</li>
        ))} */}
        {users.mentees.map((obj) => (
          <li key={obj.id}>
            ID: {obj.id}, Name: {obj.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
