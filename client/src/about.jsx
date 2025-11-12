/*
Author: Jinha Park
Student ID: 301475372
Course: COMP229 – Web Application Development
*/

import profileImg from './assets/profile.png';
import resumePdf from './assets/resume.pdf';

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>

      <figure className="about-hero">
        <img src={profileImg} alt="Profile" className="avatar avatar-lg" />
        <figcaption className="about-name">Jinha Park</figcaption>
      </figure>

      <div className="about-text">
        <p>
          I am currently studying Software Engineering Technology – Artificial Intelligence at Centennial College,
          where I am building a strong foundation in Python, SQL, Java, and C#.
        </p>
        <p>
          I enjoy solving problems, learning new tools, and applying my knowledge to practical projects.
        </p>
        <p>
          Through my coursework, I have completed projects involving data analysis with Python and SQL,
          which strengthened my technical and problem-solving skills.
        </p>
        <p>
          In addition, I bring prior experience coordinating an ERP system implementation and teaching Korean on italki,
          which highlight my teamwork, communication, and adaptability.
        </p>
      </div>

      <p className="about-resume">
        <a href={resumePdf} target="_blank" rel="noreferrer" className="resume-link">
          Download Resume (PDF)
        </a>
      </p>
    </section>
  );
}
