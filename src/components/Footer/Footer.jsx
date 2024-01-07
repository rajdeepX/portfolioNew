import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-box__logo">
        <h2 className="footer-logo__text">Rj.dev</h2>
      </div>
      <div className="footer-box__socials">
        <div className="footer-socials-icon">
          <div className="footer-social-icon__container">
            <Link to={"#"}>
              <FaLinkedinIn className="footer-social-icon" />
            </Link>
          </div>
          <div className="footer-social-icon__container">
            <Link to={"#"}>
              <FiGithub className="footer-social-icon" />
            </Link>
          </div>
        </div>
        <p>Copyright 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
