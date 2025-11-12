// client/src/api/qualificationAPI.js
const API = import.meta.env.VITE_API_URL;

// Helper to add Authorization header if token exists
function authHeaders(token) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// List
export async function listQualifications(token) {
  const res = await fetch(`${API}/qualifications`, {
    headers: { ...authHeaders(token) },
  });
  return res.json();
}

// Create (Admin)
export async function createQualification(token, payload) {
  const res = await fetch(`${API}/qualifications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders(token) },
    body: JSON.stringify(payload),
  });
  return res.json();
}

// Update (Admin)
export async function updateQualification(token, id, payload) {
  const res = await fetch(`${API}/qualifications/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeaders(token) },
    body: JSON.stringify(payload),
  });
  return res.json();
}

// Delete (Admin)
export async function deleteQualification(token, id) {
  const res = await fetch(`${API}/qualifications/${id}`, {
    method: 'DELETE',
    headers: { ...authHeaders(token) },
  });
  return res.json();
}
