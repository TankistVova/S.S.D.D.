import React from 'react';
import logo from '../asset/logo.svg';
import phoneIcon from '../asset/icons/Icon-phone-contact.png';
import mailIcon from '../asset/icons/Icon-mail-contact.png';
import geoIcon from '../asset/icons/Icon-geo-point-contact.png';
import vkIcon from '../asset/icons/Icon-vk.png';
import whatsAppIcon from '../asset/icons/Icon-whatsApp.png';
import tikTokIcon from '../asset/icons/Icon-TikTok.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container" style={{width: '100%', maxWidth: 'none', padding: '60px 20px 0 20px'}}>
        <div className="footer-content" style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', width: '100%'}}>
          <div className="footer-section" style={{flex: '1 1 300px', minWidth: '250px'}}>
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
            </div>
            <p>Технологичный подход к вашей аптечке. Ваш помощник, который упрощает контроль и организацию медицинских запасов.</p>
          </div>
          <div className="footer-section" style={{flex: '1 1 150px', minWidth: '100px'}}>
            <h4>КОМПАНИЯ</h4>
            <ul>
              <li>Главная</li>
              <li>Коротко о нас</li>
              <li>Аптечки</li>
              <li>Сервис</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-section" style={{flex: '1 1 250px', minWidth: '200px'}}>
            <h4>CONTACTS</h4>
            <ul>
              <li><img src={phoneIcon} alt="Phone" style={{width: '16px', height: '16px', marginRight: '8px', verticalAlign: 'middle'}} />+7 (982) 744 32 16</li>
              <li><img src={mailIcon} alt="Mail" style={{width: '16px', height: '16px', marginRight: '8px', verticalAlign: 'middle'}} />info@myapteka.ru</li>
              <li><img src={geoIcon} alt="Location" style={{width: '16px', height: '16px', marginRight: '8px', verticalAlign: 'middle'}} />Taganrog, SFEDU</li>
            </ul>
          </div>
          <div className="footer-section" style={{flex: '0 0 200px', minWidth: '180px', marginLeft: 'auto'}}>
            <h4>СОЦ. СЕТИ</h4>
            <div className="social-links" style={{width: '200px', height: '60px', gap: '0px', transform: 'rotate(0deg)', opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '-20px', marginTop: '-20px'}}>
              <img src={vkIcon} alt="VK" style={{width: '60px', height: '60px', minWidth: '60px', minHeight: '60px', transform: 'rotate(0deg)', opacity: 1, borderWidth: '1px', borderRadius: '12px', padding: '12px', marginRight: '-12px'}} />
              <img src={whatsAppIcon} alt="WhatsApp" style={{width: '60px', height: '60px', minWidth: '60px', minHeight: '60px', transform: 'rotate(0deg)', opacity: 1, borderWidth: '1px', borderRadius: '12px', padding: '12px', marginRight: '-12px'}} />
              <img src={tikTokIcon} alt="TikTok" style={{width: '60px', height: '60px', minWidth: '60px', minHeight: '60px', transform: 'rotate(0deg)', opacity: 1, borderWidth: '1px', borderRadius: '12px', padding: '12px'}} />
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{display: 'flex', justifyContent: 'space-between', transform: 'rotate(0deg)', opacity: 1, paddingTop: '6px', paddingRight: '10px', paddingBottom: '6px', paddingLeft: '10px', borderRadius: '24px', background: '#EAECF0'}}>
          <span>Авторские права © 2026. I'm HZ. Все права защищены</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;