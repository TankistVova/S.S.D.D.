import './App.css';
import Header from './components/Navbar';
import icon1 from './asset/icon1.png'
import icon2 from './asset/icon2.png'
import icon3 from './asset/icon3.png'
import icon11 from './asset/icon11.png'
import icon12 from './asset/icon12.png'
import icon13 from './asset/icon13.png'
import icon14 from './asset/icon14.png'
import icon21 from './asset/icon21.png'
import icon22 from './asset/icon22.png'
import icon23 from './asset/icon23.png'
import icon24 from './asset/icon24.png'
import phoneImg from './asset/phone.jpg'
import phoneImg1 from './asset/phone1.png'
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
      {/* Декоративные кружочки на заднем фоне */}
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      <div className="circle-4"></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <h1>Технологичный Подход К Вашей Аптечке</h1>
              <p>Ваш помощник, который упрощает контроль и организацию медицинских запасов.</p>
              <button className="btn-primary">Зарегистрироваться</button>
            </div>
            <div className="hero-right">
              <img src={phoneImg1} alt="Phone App" className="hero-phone" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features scroll-animate">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <img src={icon1} alt="" />
            </div>
            <h3>Создать аптечку</h3>
            <p>Добавьте аптечки которые у вас есть с категориями</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={icon2} alt="" />
            </div>
            <h3>Добавить запись к врачу</h3>
            <p>Запишитесь онлайн прямо через наше приложение к нужному специалисту</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={icon3} alt="" />
            </div>
            <h3>Online регистрация</h3>
            <p>Зарегистрируйтесь бесплатно и начните пользоваться всеми функциями</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section scroll-animate">
        <div className="stats-container">
          <h2>Мы предоставляем исключительное<br />удобство <span className="highlight">с учетом потребностей<br />пользователя</span></h2>
          <div className="phones-container">
            <img src={phoneImg} alt="Phones" className="phones-image" />
          </div>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-icon"><img src={icon11} alt="" /></div>
              <div className="stat-number">24/7</div>
              <div className="stat-text">Доступность в любое время</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><img src={icon12} alt="" /></div>
              <div className="stat-number">12.6K +</div>
              <div className="stat-text">Уже используют сервис</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><img src={icon13} alt="" /></div>
              <div className="stat-number">1200 +</div>
              <div className="stat-text">Больниц сотрудничающих с нами</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><img src={icon14} alt="" /></div>
              <div className="stat-number">220 +</div>
              <div className="stat-text">Партнеров, которые рекомендуют нас</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacy Types Section */}
      <section className="pharmacy-types scroll-animate">
        <div className="pharmacy-container">
          <h2>Возможность создавать множество аптечек под разными нуждами</h2>
          <p className="subtitle">Узнать подробнее →</p>
          <div className="types-grid">
            <div className="type-card">
              <div className="type-icon"><img src={icon21} alt="" /></div>
              <h3>Домашняя аптечка</h3>
              <ul>
                <li>Обезболивающие</li>
                <li>Жаропонижающие</li>
                <li>Противовирусные</li>
                <li>Для пищеварения</li>
                <li>Для наружного применения</li>
              </ul>
            </div>
            <div className="type-card">
              <div className="type-icon"><img src={icon22} alt="" /></div>
              <h3>Аптечка в путешествия</h3>
              <ul>
                <li>Обезболивающие</li>
                <li>Жаропонижающие</li>
                <li>Противовирусные</li>
                <li>Для пищеварения</li>
                <li>Для наружного применения</li>
              </ul>
            </div>
            <div className="type-card">
              <div className="type-icon"><img src={icon23} alt="" /></div>
              <h3>Детская аптечка</h3>
              <ul>
                <li>Обезболивающие</li>
                <li>Жаропонижающие</li>
                <li>Противовирусные</li>
                <li>Для пищеварения</li>
                <li>Для наружного применения</li>
              </ul>
            </div>
            <div className="type-card">
              <div className="type-icon"><img src={icon24} alt="" /></div>
              <h3>Дорожная аптечка</h3>
              <ul>
                <li>Обезболивающие</li>
                <li>Жаропонижающие</li>
                <li>Противовирусные</li>
                <li>Для пищеварения</li>
                <li>Для наружного применения</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits scroll-animate">
        <div className="benefits-container">
          <h2>Большой выбор возможностей при использовании нашего сервиса</h2>
          <div className="benefits-content">
            <div className="benefits-left">
              <h3>Организация аптечки - Ваше здоровье</h3>
              <p>Мы предоставляем удобный сервис для организации домашней аптечки с возможностью отслеживания сроков годности и автоматическими напоминаниями.</p>
              <ul>
                <li>Создавать несколько аптечек</li>
                <li>Добавлять лекарства с фото</li>
                <li>Отслеживать сроки годности</li>
              </ul>
              <button className="btn-primary">Начать пользоваться</button>
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
                <div className="benefit-icon">👨‍👩‍👧‍👦</div>
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
        </div>
      </section>

      {/* Registration Section */}
      <section className="registration scroll-animate">
        <div className="registration-container">
          <h2>Для использования системы необходимо зарегистрироваться</h2>
          <p>Заполните все необходимые поля</p>
          <form className="registration-form">
            <div className="form-row">
              <input type="text" placeholder="ФИО" />
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Телефон" />
              <input type="password" placeholder="Пароль" />
            </div>
            <button type="submit" className="btn-primary">Зарегистрироваться</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src={icon1} alt="Logo" />
                <span>ЦИФРОВАЯ АПТЕЧКА</span>
              </div>
              <p>Ваш надежный помощник в организации домашней аптечки и заботе о здоровье семьи.</p>
            </div>
            <div className="footer-section">
              <h4>НАВИГАЦИЯ</h4>
              <ul>
                <li>Главная</li>
                <li>Записаться к врачу</li>
                <li>Каталог</li>
                <li>Услуги</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>КОНТАКТЫ</h4>
              <ul>
                <li>+7 (999) 999 99 99</li>
                <li>info@aptechka.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>МЫ В СЕТИ</h4>
              <div className="social-links">
                <span>📘</span>
                <span>📷</span>
                <span>🐦</span>
                <span>📺</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
