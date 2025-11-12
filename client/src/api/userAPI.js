
const API = import.meta.env.VITE_API_URL;

export async function fetchUsers(token) {
  const res = await fetch(`${API}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}