import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faGithub,
  faSass,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/pages/About.css";

function About() {
  const faIcons = [faJs, faHtml5, faCss3, faReact, faSass, faFigma, faGithub];
  return (
    <main className="container-about">
      <h1>Обо мне</h1>
      <div className="text-img-box">
        <section className="text-section">
          <p>
            Привет! Меня зовут <span>Низами</span>, я{" "}
            <span>фронтенд-разработчик</span>, увлеченный созданием красивых и
            удобных <span>веб-интерфейсов</span>. Работаю с{" "}
            <span>JavaScript</span>, <span>React</span>, <span>HTML</span> и
            <span> CSS</span>, а также совершенствую навыки в разработке
            <span> PWA</span> и адаптивных приложений.
          </p>
          <p>
            Создаю сайты под ключ, предлагая <span>качественные</span> и
            <span> современные</span> решения. Если вам нужен ответственный
            <span> разработчик</span> или вы ищете <span>сотрудника</span> в свою
            команду, я готов быть полезным и открытым к новым вызовам!
          </p>
          <p>
            Помимо программирования, люблю работать с <span>макетами</span>,
            исследовать новые технологии и отдыхать в <span>тишине</span>.
          </p>
        </section>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/about.png`}
          alt="about"
          className="image"
        />
      </div>

      <div className="scills">
        <h1>
          <span>Мои навыки</span>
        </h1>
        <div className="box-with-boxs">
          {faIcons.map((icon, index) => (
            <div key={index} className="border-box">
              <FontAwesomeIcon icon={icon} className="icon" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default About;
