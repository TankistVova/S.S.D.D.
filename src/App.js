import './App.css';
import Header from './components/Navbar';
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import phoneImg from './phone.jpg'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>ТЕХНОЛОГИЧНЫЙ ПОДХОД К ДОМАШНЕЙ АПТЕЧКЕ</h1>
            <p>Ваш помощник, который упрощает контроль и организацию медицинских запасов. Сервис подсказывает, что заканчивается, что просрочено и что нужно докупить — быстро, удобно и без путаницы</p>
            <div className="hero-buttons">
              <button className="btn-primary">Записаться на прием врача</button>
              <button className="btn-secondary">Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features scroll-animate">
        <div className="feature-card">
          <img src={icon1} alt="" className="feature-icon" />
          <h3>Создать аптечку</h3>
          <p>Добавьте аптечки которые у вас есть с категориями</p>
        </div>
        <div className="feature-card">
        <img src={icon2} alt="" className="feature-icon" />
          <h3>Добавить запись к врачу</h3>
          <p>Запишитесь онлайн прямо через наше приложение к нужному специалисту</p>
        </div>
        <div className="feature-card">
          <img src={icon3} alt="" className="feature-icon" />
          <h3>Online регистрация</h3>
          <p>Зарегистрируйтесь бесплатно и начните пользоваться всеми функциями</p>
        </div>
      </section>

      <section className="phones-section scroll-animate">
        <h2>Мы предоставляем исключительное удобство <span className="highlight">с учетом потребностей пользователя</span></h2>
        <div className="phones-container">
          <img src={phoneImg} alt="Phones" className="phones-image" />
        </div>
        <div className="stats">
          <div className="stat-item">
            <div className="stat-icon">📅</div>
            <div className="stat-number">24/7</div>
            <div className="stat-text">Доступность в любое время</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div className="stat-number">12.6K +</div>
            <div className="stat-text">Уже используют сервис</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🏥</div>
            <div className="stat-number">1200 +</div>
            <div className="stat-text">Больниц, сотрудничающих с нами</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🛡️</div>
            <div className="stat-number">220 +</div>
            <div className="stat-text">Партнеров, которые рекомендуют нас</div>
          </div>
        </div>
      </section>

      <section className="pharmacy-types scroll-animate">
        <h2>Возможность создавать множество аптечек под разными нуждами</h2>
        <p className="subtitle">Узнать подробнее →</p>
        <div className="types-grid">
          <div className="type-card">
            <div className="type-icon">🏠</div>
            <h3>Домашняя аптечка</h3>
            <ul>
              <li>Для всей семьи</li>
              <li>Для взрослых</li>
              <li>Для детей</li>
              <li>Для пожилых людей</li>
              <li>Для домашних животных</li>
            </ul>
          </div>
          <div className="type-card">
            <div className="type-icon">✈️</div>
            <h3>Дорога и путешествия</h3>
            <ul>
              <li>Для всей семьи</li>
              <li>Для взрослых</li>
              <li>Для детей</li>
              <li>Для пожилых людей</li>
              <li>Для домашних животных</li>
            </ul>
          </div>
          <div className="type-card">
            <div className="type-icon">🚗</div>
            <h3>Детская аптечка</h3>
            <ul>
              <li>Для всей семьи</li>
              <li>Для взрослых</li>
              <li>Для детей</li>
              <li>Для пожилых людей</li>
              <li>Для домашних животных</li>
            </ul>
          </div>
          <div className="type-card">
            <div className="type-icon">🐾</div>
            <h3>Детская аптечка</h3>
            <ul>
              <li>Для всей семьи</li>
              <li>Для взрослых</li>
              <li>Для детей</li>
              <li>Для пожилых людей</li>
              <li>Для домашних животных</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="benefits scroll-animate">
        <h2>Большой выбор возможностей при использовании нашего сервиса</h2>
        <div className="benefits-content">
          <div className="benefits-left">
            <h3>Организация аптечки - Ваше здоровье</h3>
            <p>Мы предоставляем удобный сервис для организации домашней аптечки с возможностью:</p>
            <ul>
              <li>Создавать несколько аптечек</li>
              <li>Добавлять лекарства с фото</li>
              <li>Отслеживать сроки годности</li>
            </ul>
            <button className="btn-primary">Создать аптечку</button>
          </div>
          <div className="benefits-right">
            <div className="benefit-item">
              <div className="benefit-icon">📊</div>
              <h4>Добавление в учет продуктов</h4>
              <p>Добавляйте лекарства и отслеживайте их количество</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔔</div>
              <h4>Гибкая интеграция</h4>
              <p>Интегрируйте с другими сервисами здоровья</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📱</div>
              <h4>Семейный доступ</h4>
              <p>Делитесь доступом с членами семьи</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚕️</div>
              <h4>Автоматические уведомления</h4>
              <p>Получайте напоминания о сроках годности</p>
            </div>
          </div>
        </div>
      </section>

      <section className="registration scroll-animate">
        <h2>Для использования системы необходимо зарегистрироваться</h2>
        <p>Заполните все необходимые поля</p>
        <form className="registration-form">
          <input type="text" placeholder="ФИО" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Телефон" />
          <input type="password" placeholder="Пароль" />
          <button type="submit" className="btn-primary">Зарегистрироваться</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2024 Цифровая Аптечка. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;