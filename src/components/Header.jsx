import { useState, useEffect } from "react";

import "../styles/components/Header.css";

import { Link, useLocation } from "react-router-dom";
import routes from "../routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/" className="link">
          N.K.
        </Link>
      </div>
      <div className={`navigation ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            {routes.map(({ path, name, icons }, index) => (
              <li key={index}>
                <Link to={path} className={`link ${pathname === path ? "active" : ""}`} onClick={toggleMenu}>
                  <FontAwesomeIcon icon={icons} className="icons" />
                  {name}
                </Link>
              </li>
            ))}
            <li key={5} className="cbf">
              <a
                href="https://github.com/IIIWinterIII/Portfolio"
                className="btn"
              >
                <FontAwesomeIcon icon={faCodeBranch} className="icons" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faAngleDoubleRight}
          className={`arrow ${isOpen ? "rotate" : ""}`}
        />
      </button>
    </header>
  );
}

export default Header;
