import React from 'react';

function Home() {
  return (
    <main>
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" alt="Profilbild" className="profile-img" />
        <div className="hero-text">
          <h1>Hej, jag heter Mustafa Alikhadyer</h1>
          <p>Jag är en passionerad Fullstack Utvecklare som älskar att bygga snygga och funktionella webbplatser i React.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;