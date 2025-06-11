import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => (
  <header className="header">
    <h1>Parichay Dutta Biswas Directory App</h1>
    <button onClick={toggleDarkMode} className="toggle-mode-btn">
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  </header>
);

export default Header;
