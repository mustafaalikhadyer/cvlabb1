import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Cv from './pages/Cv';
import Portfolio from './pages/Portfolio';

function App() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Påskäggs-logik (1337)
  useEffect(() => {
    let keySequence = '';
    const handleKeyDown = (e) => {
      keySequence += e.key;
      if (keySequence.length > 4) keySequence = keySequence.slice(-4);
      if (keySequence === '1337') {
        setShowEasterEgg(true);
        keySequence = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <nav>
        <div className="logo">Mustafa.</div>
        <ul className="nav-links">
          {/* NavLink lägger automatiskt till class="active" på rätt länk! */}
          <li><NavLink to="/">Hem</NavLink></li>
          <li><NavLink to="/cv">CV</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <footer>
        <p>&copy; 2026 Mustafa Alikhadyer</p>
      </footer>

      {/* Påskäggs-Modal */}
      {showEasterEgg && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowEasterEgg(false)}>&times;</span>
            <h2>👾 ELITE!</h2>
            <p>Du skrev in den hemliga koden "1337" i React! Snyggt!</p>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;