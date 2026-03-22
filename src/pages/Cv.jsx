import React from 'react';
import cvData from '../data/cvData.json'; // Importerar JSON-filen

function Cv() {
  return (
    <main className="cv-container">
      <header className="cv-header">
        <h1>Curriculum Vitae</h1>
      </header>

      <section className="cv-section">
        <h2>Arbetslivserfarenhet</h2>
        {/* Loopar igenom arbetslivserfarenhet */}
        {cvData.experience.map(job => (
          <div key={job.id} className="cv-item">
            <h3>{job.role} - {job.company}</h3>
            <span className="date">{job.years}</span>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Utbildning</h2>
        {/* Loopar igenom utbildning */}
        {cvData.education.map(edu => (
          <div key={edu.id} className="cv-item">
            <h3>{edu.program} - {edu.school}</h3>
            <span className="date">{edu.years}</span>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Cv;