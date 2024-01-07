import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-box">
        <Link to={"/"} className="logo-text">
          Rj.dev
        </Link>
      </div>
      <div className="nav-control">
        <div className="nav-links__socials">
          <div className="social-icon__container">
            <Link to={"/"}>
              <FaLinkedinIn className="social-icon" />
            </Link>
          </div>
          <div className="social-icon__container">
            <Link to={"/"}>
              <FiGithub className="social-icon" />
            </Link>
          </div>
        </div>
        <div className="nav-btn">
          <a href="mailto:rajdeepdutta70@gmail.com">
            <span>Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
