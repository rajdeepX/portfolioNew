import "./ProjectCard.css";
import img from "../../assets/img/cryptrack.jpg";

const Project4 = () => {
  return (
    <div className="project-detail">
      <div className="project-info">
        <h4>CrypTrack</h4>
        <div className="tool-req">
          <p>Javascript</p>
          <p>React</p>
          <p>React Router</p>
          <p>Sementic UI</p>
          <p>Rapid Api</p>
          <p>Chart.js</p>
        </div>
        <p>
          Welcome to my React-based cryptocurrency tracker CrypTrack! Here you
          can find data on various cryptocurrencies. Powered by Rapid API, this
          dynamic website provides essential information, including prices and
          historical chart. Explore the exciting world of digital currencies and
          make informed investment decisions.
        </p>
        <a href="https://cryptrack-react-project.netlify.app/" target="blank">
          View Project
        </a>
        <a href="https://github.com/rajdeepX/CrypTrack">View Project Code</a>
      </div>
      <div className="project-img-container">
        <a href="https://cryptrack-react-project.netlify.app/" target="blank">
          <img src={img} alt="ss" />
        </a>
      </div>
    </div>
  );
};
export default Project4;
