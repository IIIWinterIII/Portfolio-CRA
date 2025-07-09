import React from "react";
import "../styles/components/Footer.css";
import ContactButton from "./ContactButton"
 
function Footer() {
  return (
    <footer className="container-footer">
      <p>Разработано и создано IIIWinteRIII</p>
      <p>Авторские права © 2024 N.K.</p>
      <ContactButton />
    </footer>
  );
}

export default Footer;
