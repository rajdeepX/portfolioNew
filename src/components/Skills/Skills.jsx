import "./Skills.css";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNpm } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skill-section">
      <div className="skill-head">
        <h2>
          My Skills <hr className="skill-head__line" />
        </h2>
      </div>
      <div className="skill-container">
        <div className="skill-icon-container">
          <div className="icon-container">
            <FaHtml5 />
            <p>HTML</p>
          </div>

          <div className="icon-container">
            <FaCss3Alt />
            <p>CSS</p>
          </div>
          <div className="icon-container">
            <RiJavascriptFill />
            <p>Javascript</p>
          </div>
          <div className="icon-container">
            <FaReact />
            <p>React</p>
          </div>
          <div className="icon-container">
            <SiRedux className="redux" />
            <p>Redux</p>
          </div>
          <div className="icon-container">
            <FaNodeJs />
            <p>NodeJs</p>
          </div>
          <div className="icon-container">
            {/* <FontAwesomeIcon className="skill-icon" icon={fa} /> */}
            <BiLogoTypescript />
            <p>TypeScript</p>
          </div>
          <div className="icon-container">
            <SiNpm />
            <p>npm</p>
          </div>
          <div className="icon-container">
            <SiGithub />
            <p>Git</p>
          </div>
          <div className="icon-container">
            <SiMongodb />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
