import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin } from '../api/authAPI';

export default function Signin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const nav = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await signin(form);
    if (data?.token) {
      // Save JWT for protected requests
      localStorage.setItem('jwt', data.token);
      localStorage.setItem('user', JSON.stringify(data.user || {}));
      nav('/users');
    } else {
      setMsg(data?.message || 'Signin failed');
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '2rem auto' }}>
      <h2>Sign In</h2>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
        <br />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} required />
        <br />
        <button type="submit">Sign In</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
