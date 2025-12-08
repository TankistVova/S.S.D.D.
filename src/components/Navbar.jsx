import React, { useState } from 'react';
import './Navbar.css';
import logo from '../logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Цифровая Аттенка" />
      </div>
      
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="/">Главная</a></li>
        <li><a href="/doctor">Записаться к врачу</a></li>
        <li><a href="/catalog">Каталог</a></li>
        <li><a href="/tests">Мои тесты</a></li>
      </ul>

      <div className="language">
        РУС <span className="dropdown-arrow">▼</span>
        <button className="profile-button">Профиль</button>
      </div>
    </nav>
  );
};

export default Navbar;