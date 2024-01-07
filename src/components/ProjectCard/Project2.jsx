import "./ProjectCard.css";
import img from "../../assets/img/NoteDeck.jpg";

const Project2 = () => {
  return (
    <div className="project-detail">
      <div className="project-info">
        <h4>NoteDeckV2</h4>
        <div className="tool-req">
          <p>React</p>
          <p>TypeScript</p>
          <p>MongoDB</p>
          <p>React Router</p>
          <p>NodeJs</p>
          <p>ExpressJs</p>
          <p>Sementic UI</p>
        </div>
        <p>
          A fullstack dynamic note-taking app powered by the MERN stack and
          enriched with TypeScript. Seamlessly organize your thoughts within
          individual notes, which can be structured into decks for optimal
          clarity. Elevate your note-taking experience with NoteDeck's intuitive
          and versatile platform.
        </p>
        <a href="https://notedeckv2.onrender.com/" target="blank">
          View Project
        </a>
        <a href="https://github.com/rajdeepX/NoteDeckV2" target="blank">
          View Project Code
        </a>
      </div>
      <div className="project-img-container">
        <a href="https://notedeckv2.onrender.com/" target="blank">
          <img src={img} alt="ss" />
        </a>
      </div>
    </div>
  );
};
export default Project2;
