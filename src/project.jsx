/*
 * File: project.jsx
 * Purpose: Shows 3 highlight projects as cards.
 */
import proj1 from './assets/proj1.png';
import proj2 from './assets/proj2.png';
import proj3 from './assets/proj3.png';

  const projects = [
    {
      img: proj1,
      title: 'Data Analysis - GDP vs Fertility Rate',
      desc: 'Performed data cleaning, transformation, and visualization using Python (pandas) to analyze GDP-fertility trends',
      link: 'https://github.com/jpark290/mini-data-analysis.git',
    },
    {
      img: proj2,
      title: 'SQL Database Project - E-commerce Platform (Best Buy)',
      desc: 'Tested database modules (cart, refund, inventory) with structured test queries and validated outputs via reporting queries',
      link: 'https://github.com/jpark290/E-commerce-Platform-Best-Buy-.git',
    },
    {
      img: proj3,
      title: 'Software Requirements Specification - Retail Inventory System',
      desc: 'Drafted structured use cases for an ERP-based inventory system',
      link: 'https://github.com/jpark290/Retail_Inventory_System.git',
    },
  ];
  
export default function Project() {
  return (
    <section>
      <h2>Projects</h2>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {items.map((p, i) => (
          <article key={i} style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16 }}>
            <img src={p.img} alt={p.title}   style={{
              width: '100%',
              height: 220,        // 140 → 220 으로 늘림
              objectFit: 'contain', // cover → contain 으로 바꾸면 잘리지 않고 전체 표시
              borderRadius: 8,
              background: '#fff'   // 여백이 생기면 흰 배경으로 채움
              }}
/>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
