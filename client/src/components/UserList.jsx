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
