import React from "react";
import "../styles/components/ContactButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";

function ContactButton() {
  return (
    <div className="contact-box">
      <a href="mailto:nizamikas@gmail.com">nizamikas@gmail.com</a>
      <a href="https://t.me/iwinter1">
        <FontAwesomeIcon icon={faTelegram} className="icon" />
      </a>
      <a href="https://github.com/IIIWinterIII">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
    </div>
  );
}

export default ContactButton;
