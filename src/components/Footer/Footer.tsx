import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import exis from "../../assets/logo-black.png";
import "./Footer.css";

const Footer = (): React.ReactElement => {
  return (
    <section className="footer-container">
      <span className="footer__legal">
        Copyright © 2024 - Web Diseñada por Jose Manuel Vera
      </span>
      <ul className="footer__social">
        <li>
          <img src={instagram} alt="insta icon" width={48} height={48} />
        </li>
        <li>
          <img src={facebook} alt="face icon" width={48} height={48} />
        </li>
        <li>
          <img src={exis} alt="x icon" width={48} height={48} />
        </li>
      </ul>
    </section>
  );
};

export default Footer;
