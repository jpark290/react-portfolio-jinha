<<<<<<< HEAD
/*
Author: Jinha Park
Student ID: 301475372
Course: COMP229 – Web Application Development
*/
=======
>>>>>>> 2ab3cf8 (Use node for start script in production)
import { useEffect, useState } from 'react';
import { fetchUsers } from "../api/userAPI.js";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('jwt');

  useEffect(() => {
    // Load users on mount
    (async () => {
      const data = await fetchUsers(token);
      setUsers(Array.isArray(data) ? data : []);
    })();
  }, [token]);

  return (
    <div style={{ maxWidth: 720, margin: '2rem auto' }}>
      <h2>Users (Protected)</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.name} — {u.email}</li>
        ))}
      </ul>
    </div>
  );
}
