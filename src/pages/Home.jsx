import React from "react";
import "../styles/pages/Home.css";
import ContactButton from "../components/ContactButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <main>
      <div className="vision-section">
        <div className="text-box">
          <span>
            {" "}
            <h1>Привет!</h1>
            <h1>Меня зовут Низами.</h1>
          </span>
          <p>
            Я <span>Frontend-разработчик</span>, создаю современные и удобные{" "}
            <span>веб-приложения</span>.
          </p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/home-main.png`}
          alt="home pic"
          className="image"
        />
      </div>
      <div className="icon-down">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      {/* -------------------------- */}
      <section className="intro">
        <div className="text-box">
          <p>
            Я <span>фронтенд-разработчик</span> и <span>HTML-верстальщик</span>{" "}
            с опытом создания удобных и эстетичных веб-сайтов.
          </p>
          <p>
            Мои начальные шаги включали <span>разработку сайтов</span> для
            малого бизнеса. Затем я углубился в проекты на платформе UpWork, что
            помогло мне
            <span> развить навыки</span> и{" "}
            <span>научиться находить решения</span> для различных задач.
          </p>
          <p>
            Сейчас я <span>продолжаю</span> создавать веб-проекты и
            <span> совершенствуюсь</span> в этой сфере.
          </p>
        </div>
        <div className="avatar">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/avatar-from-telegram.jpg`}
            alt="my-avatar"
          />
        </div>
      </section>
      <div className="end-home">
        <h3>
          <span>Переходите</span> в <span>разделы сайта</span>, чтобы{" "}
          <span>узнать больше</span> обо мне и моих работах!
        </h3>
      </div>
      <div className="contact-me">
        <h2>
          Не стесняйтесь <span>связаться</span> со мной
        </h2>
        <ContactButton />
      </div>
    </main>
  );
}

export default Home;
