import { NavLink } from "react-router-dom";
import paths from "../../paths/paths";
import { scrollToTop } from "../ScrollToTop/ScrollToTop";
import { useState } from "react";
import menu from "../../assets/menu.png";
import "./WebNavigationBar.css";

const WebNavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="webnav-container">
      <button className="webnav__menu" onClick={toggleMenu}>
        <img src={menu} alt="menu icon" width={38} height={38} />
      </button>
      {isMenuOpen ? (
        <ul className="webnav__list">
          <li className="webnav__list-item">
            <NavLink
              to={paths.home}
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Inicio
            </NavLink>
          </li>
          <li className="webnav__list-item">
            <NavLink
              to={paths.readingList}
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Lista de Lectura
            </NavLink>
          </li>
          <li className="webnav__list-item">
            <NavLink
              to={paths.contact}
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Contacta
            </NavLink>
          </li>
        </ul>
      ) : null}
    </section>
  );
};

export default WebNavigationBar;
