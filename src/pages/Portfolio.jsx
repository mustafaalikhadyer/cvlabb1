import React, { useState, useEffect } from 'react';

function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true); // Håller koll på om vi laddar

  useEffect(() => {
    // Byt ut "MustafaAlikhadyer" mot ditt exakta GitHub-användarnamn
    fetch('https://api.github.com/users/MustafaAlikhadyer/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setLoading(false); // Laddningen är klar!
      })
      .catch(error => console.error("Kunde inte hämta projekt", error));
  }, []);

  return (
    <main className="container">
      <h1>Mina GitHub Projekt</h1>
      
      {/* Visar text medans vi väntar på API:et */}
      {loading ? (
        <p>Laddar in projekt från GitHub... ⏳</p>
      ) : (
        <div className="portfolio-grid">
          {repos.map(repo => (
            <article key={repo.id} className="project-card">
              <h3>{repo.name}</h3>
              <p>{repo.description ? repo.description : "Ingen beskrivning finns."}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="cta-button">
                Visa på GitHub
              </a>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default Portfolio;