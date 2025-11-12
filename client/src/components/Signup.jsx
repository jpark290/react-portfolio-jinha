import { useState } from 'react';
import { signup } from '../api/authAPI';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await signup(form);
    if (data?._id || data?.name) setMsg('Signup success. Please sign in.');
    else setMsg(data?.message || 'Signup failed');
  };

  return (
    <div style={{ maxWidth: 420, margin: '2rem auto' }}>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={onChange} required />
        <br />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
        <br />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} required />
        <br />
        <button type="submit">Create Account</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
