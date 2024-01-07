import "./ProjectCard.css";
import img from "../../assets/img/bookInn.png";

const Project3 = () => {
  return (
    <div className="project-detail">
      <div className="project-info">
        <h4>BookInn</h4>
        <div className="tool-req">
          <p>Javascript</p>
          <p>React</p>
          <p>React Router</p>
          <p>Sementic UI</p>
          <p>React Icons</p>
        </div>
        <p>
          Welcome to bookInn, your homestay booking app! Discover unique
          accommodations, book your ideal stay, and immerse yourself in
          unforgettable experiences. Browse through a wide selection of homes,
          villas, and apartments, and make your travel dreams a reality.
        </p>
        <a href="https://react-bookinn-application.netlify.app/" target="blank">
          View Project
        </a>
        <a href="https://github.com/rajdeepX/bookInn-project" target="blank">
          View Project Code
        </a>
      </div>
      <div className="project-img-container">
        <a target="blank" href="https://react-bookinn-application.netlify.app/">
          <img src={img} alt="ss" />
        </a>
      </div>
    </div>
  );
};
export default Project3;
