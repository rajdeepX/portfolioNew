import "./Banner.css";
import hand from "../../assets/waving.png";
import bannerImg from "../../assets/img/header-img.svg";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { TiChevronRight } from "react-icons/ti";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <section className="banner-box__main">
        <div className="banner-box__container">
          <div className="banner-box">
            <div className="banner-box__text">
              <h1>
                React Front-End <br />
                Developer{" "}
                <img src={hand} alt="hand" style={{ width: "50px" }} />
                {/* <span></span> */}
              </h1>
              <p>
                Hi, I&apos;m Rajdeep Dutta. A passionate React Front-end <br />
                Developer based in Assam, India. 📍
              </p>
              {/* <div className="portfolio-btn__box">
              <Link to={"/portfolio"} className="portfolio-btn">
                Checkout my Profile <TiChevronRight className="arrow-right" />
              </Link>
            </div> */}
              <div className="tech-stack">
                <p>Tech Stack</p>
                <hr className="vertical-line" />
                <div className="tech-stack__icons">
                  <FaHtml5 />
                  <FaCss3Alt />
                  <RiJavascriptFill />
                  <FaReact />
                  <SiTailwindcss />
                  <FaSass />
                </div>
              </div>
              <div className="portfolio-btn__box">
                <Link to={"/portfolio"} className="portfolio-btn">
                  Checkout my Profile <TiChevronRight className="arrow-right" />
                </Link>
              </div>
            </div>
            <div className="banner-box__img">
              <img src={bannerImg} alt="banner-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
