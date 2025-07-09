import React from "react";
import "../styles/pages/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <main className="container-contact">
      <div className="contacts-box">
        <div className="contact-messager">
          <h1>Google Mail</h1>
          <h1>-</h1>
          <a href="mailto:nizamikas@gmail.com" className="mail">
            nizamikas@gmail.com
          </a>
        </div>
        <div className="contact-messager">
          <h1>Telegram</h1>
          <h1>-</h1>
          <a href="https://t.me/iwinter1">
            <FontAwesomeIcon icon={faTelegram} className="icon" />
          </a>
        </div>
        <div className="contact-messager">
          <h1>GitHub</h1>
          <h1>-</h1>
          <a href="https://github.com/IIIWinterIII">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
        <div className="contact-messager">
          <h1>Resume hh</h1>
          <h1>-</h1>
          <a
            href="..\assets\resume\resume.pdf"
            download="resume.pdf"
            className="download-resume-button"
          >
            Download Resume PDF
          </a>
        </div>
      </div>

      <div className="advertising-text">
        <p>
          Я <span>открыт к предложениям</span> о сотрудничестве в роли
          <span> фронтенд-разработчика</span> или <span>HTML-верстальщика</span>
          .
        </p>
        <div className="create-site">
          <p>
            Также если вам <span>нужен</span> современный <span>сайт</span>, я
            готов помочь с:
          </p>
          <ul>
            <li>
              <span>Одностраничниками</span> (сайты-визитки, портфолио и т.д. —
              отлично подходят для быстрого ознакомления с вашим бизнесом и
              предоставления услуг);
            </li>
            <li>
              <span>Лендингами</span> (идеально для продвижения товаров и услуг,
              создания целевых страниц для рекламных кампаний и увеличения
              конверсий);
            </li>
            <li>
              <span>Прогрессивными веб-приложениями (PWA)</span> с расширенной
              функциональностью ( идеально для интерактивного взаимодействия с
              пользователями и повышения удобства работы с вашим сервисом).
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Contact;
