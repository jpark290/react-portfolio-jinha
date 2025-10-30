/*
 * File: contact.jsx
 * Purpose: Contact information panel and interactive form.
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  //State object: captures form fields
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  // Handle input updates (controlled components)
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Handle submit → log data + redirect to Home
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', form);
    navigate('/');
  };

  return (
    <section>
      <h2>Contact</h2>

      <div className="muted" style={{ marginBottom: 16 }}>
        <p><strong>Email:</strong> jpark290@my.centennialcollege.ca</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jinhapark777/" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/jpark290" target="_blank" rel="noreferrer">GitHub Repositories</a></p>
      </div>

      <form onSubmit={onSubmit} className="form">
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={onChange} required />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={onChange} required />
        <input name="contactNumber" placeholder="Contact Number" value={form.contactNumber} onChange={onChange} />
        <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={onChange} required />
        <textarea name="message" placeholder="Message" rows={5} value={form.message} onChange={onChange} />
        <button type="submit">Send &amp; Go Home</button>
      </form>
    </section>
  );
}
