import React, { useState } from 'react';
import './Navbar.css';
import logo from '../asset/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Цифровая Аптечка" />
        </div>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="/">Главная</a></li>
          <li><a href="/about">Коротко о нас</a></li>
          <li><a href="/pharmacy">Аптечки</a></li>
          <li><a href="/service">Сервис</a></li>
        </ul>

        <div className="navbar-right">
          <button className="login-button">Войти</button>
          <button className="register-button">Зарегистрироваться</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;