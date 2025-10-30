/*
 * File: services.jsx
 * Purpose: Lists 3 offered services (image + description).
 */
import analysis from './assets/analysis.png';
import python from './assets/python.png';
import sqlExcel from './assets/sql_excel.png';


  const services = [
    {
      img: python,
      title: 'Python Programming',
      desc: 'Building scripts and applications with clean, efficient, and well-documented code.',
    },
    {
      img: sqlExcel,
      title: 'SQL & Excel Skills',
      desc: 'Querying, managing, and analyzing data to support decision-making and problem-solving.',
    },
    {
      img: analysis,
      title: 'Analytical & Detail-Oriented',
      desc: 'Applying problem-solving skills and attention to detail in development and data analysis.',
    },
  ];
  
export default function Services() {
  return (
    <section>
      <h2>Services</h2>
      <div
        style={{
          display: 'grid',
          gap: 24,
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        }}
      >
        {services.map((s, i) => (
          <article
            key={i}
            style={{
              border: '1px solid #ddd',
              borderRadius: 12,
              padding: 20,
              textAlign: 'center',
              boxShadow: '0 6px 24px rgba(0,0,0,.06)',
            }}
          >
            <img
              src={s.img}
              alt={s.title}
              style={{
                width: '100%',
                height: 240,
                objectFit: 'contain',
                background: '#f3f4f6',
                borderRadius: 12,
                marginBottom: 14,
              }}
            />
            <h3 style={{ margin: '10px 0', fontWeight: 800, fontSize: 20 }}>{s.title}</h3>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: 15 }}>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
