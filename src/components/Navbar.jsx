import React, { useState } from 'react';
import './Navbar.css';
import logo from '../asset/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Цифровая Аптечка" />
          <span>ЦИФРОВАЯ АПТЕЧКА</span>
        </div>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="/">Главная</a></li>
          <li><a href="/doctor">Записаться к врачу</a></li>
          <li><a href="/catalog">Каталог</a></li>
          <li><a href="/services">Услуги</a></li>
        </ul>

        <div className="navbar-right">
          <div className="language">
            РУС <span className="dropdown-arrow">▼</span>
          </div>
          <button className="login-button">Войти</button>
          <button className="register-button">Зарегистрироваться</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;