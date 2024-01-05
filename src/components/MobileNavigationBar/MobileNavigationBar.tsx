import archivos from "../../assets/archivos.png";
import contacto from "../../assets/contacto.png";
import home from "../../assets/casa.png";
import "./MobileNavigationBar.css";
import { NavLink } from "react-router-dom";
import paths from "../../paths/paths";
import { scrollToTop } from "../ScrollToTop/ScrollToTop";

const MobileNavigationBar = (): React.ReactElement => {
  return (
    <section className="navigation-bar">
      <li>
        <NavLink to={paths.home} onClick={scrollToTop}>
          <img src={home} alt="icono de home" width={48} height={48} />
        </NavLink>
      </li>
      <li>
        <NavLink to={paths.readingList} onClick={scrollToTop}>
          <img
            src={archivos}
            alt="icono de lista libros"
            width={48}
            height={48}
          />
        </NavLink>
      </li>
      <li>
        <NavLink to={paths.contact} onClick={scrollToTop}>
          <img src={contacto} alt="icono de contacto" width={48} height={48} />
        </NavLink>
      </li>
    </section>
  );
};

export default MobileNavigationBar;
