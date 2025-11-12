/*
 * File: qualification.jsx
 * Purpose: Qualification(Education) CRUD with React state + API integration.
 */
import { useEffect, useState } from 'react';
import {
  listQualifications,
  createQualification,
  updateQualification,
  deleteQualification,
} from '../api/qualificationAPI';

export default function QualificationPage() {
  const token = localStorage.getItem('jwt');
  const me = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin = me?.role === 'admin';

  // Create/Edit form state
  const [form, setForm] = useState({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    completion: '', // yyyy-mm-dd
    description: '',
  });

  const [items, setItems] = useState([]);
  const [msg, setMsg] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Load list
  const load = async () => {
    const data = await listQualifications(token);
    setItems(Array.isArray(data) ? data : []);
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Reset form
  const reset = () => {
    setForm({ title: '', firstname: '', lastname: '', email: '', completion: '', description: '' });
    setEditingId(null);
  };

  // Create
  const onCreate = async (e) => {
    e.preventDefault();
    if (!isAdmin) { setMsg('Admin only.'); return; }
    const payload = { ...form };
    const created = await createQualification(token, payload);
    if (created?._id) {
      setMsg('Created successfully.');
      reset();
      load();
    } else {
      setMsg(created?.message || 'Create failed.');
    }
  };

  // Start edit
  const startEdit = (q) => {
    if (!isAdmin) { setMsg('Admin only.'); return; }
    setEditingId(q._id);
    setForm({
      title: q.title || '',
      firstname: q.firstname || '',
      lastname: q.lastname || '',
      email: q.email || '',
      completion: q.completion ? q.completion.substring(0, 10) : '',
      description: q.description || '',
    });
  };

  // Save edit
  const onUpdate = async (e) => {
    e.preventDefault();
    if (!isAdmin) { setMsg('Admin only.'); return; }
    const updated = await updateQualification(token, editingId, { ...form });
    if (updated?._id || updated?.message === 'Qualification updated') {
      setMsg('Updated successfully.');
      reset();
      load();
    } else {
      setMsg(updated?.message || 'Update failed.');
    }
  };

  // Delete
  const onDelete = async (id) => {
    if (!isAdmin) { setMsg('Admin only.'); return; }
    const r = await deleteQualification(token, id);
    if (r?.message) {
      setMsg('Deleted.');
      load();
    } else {
      setMsg(r?.message || 'Delete failed.');
    }
  };

  return (
    <section style={{ maxWidth: 840, margin: '2rem auto' }}>
      <h2>Qualifications</h2>
      <p className="muted">
        {isAdmin ? 'Admin mode: you can create, edit, delete.' : 'Read-only mode.'}
      </p>

      {/* Create / Edit Form */}
      <form onSubmit={editingId ? onUpdate : onCreate} className="form" style={{ marginBottom: 16 }}>
        <input name="title" placeholder="Title" value={form.title} onChange={onChange} required />
        <input name="firstname" placeholder="First name" value={form.firstname} onChange={onChange} required />
        <input name="lastname" placeholder="Last name" value={form.lastname} onChange={onChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
        <input type="date" name="completion" placeholder="Completion" value={form.completion} onChange={onChange} required />
        <textarea name="description" placeholder="Description" rows={4} value={form.description} onChange={onChange} required />
        {isAdmin && (
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <button type="submit">{editingId ? 'Save Changes' : 'Create'}</button>
            {editingId && <button type="button" onClick={reset}>Cancel</button>}
          </div>
        )}
      </form>

      {msg && <p style={{ marginTop: 8 }}>{msg}</p>}

      {/* List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((q) => (
          <li key={q._id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, marginBottom: 8 }}>
            <div><strong>{q.title}</strong></div>
            <div>{q.firstname} {q.lastname} — {q.email}</div>
            <div>Completion: {q.completion ? q.completion.substring(0, 10) : 'N/A'}</div>
            <div style={{ whiteSpace: 'pre-wrap' }}>{q.description}</div>

            {isAdmin && (
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <button onClick={() => startEdit(q)}>Edit</button>
                <button onClick={() => onDelete(q._id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
