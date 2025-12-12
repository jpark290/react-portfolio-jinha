/*
Author: Jinha Park
Student ID: 301475372
Course: COMP229 – Web Application Development
*/
const API = import.meta.env.VITE_API_URL;

export async function fetchUsers(token) {
  const res = await fetch(`${API}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}