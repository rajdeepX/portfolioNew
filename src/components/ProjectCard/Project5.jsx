import "./ProjectCard.css";
import img from "../../assets/img/dash.png";

const Project5 = () => {
  return (
    <div className="project-detail">
      <div className="project-info">
        <h4>Dashboard</h4>
        <div className="tool-req">
          <p>TypeScript</p>
          <p>React</p>
          <p>Redux</p>
          <p>React Router</p>
          <p>React Query</p>
          <p>Tailwind</p>
          <p>Leaflet</p>
          <p>Chart.js</p>
          <p>Recharts</p>
        </div>
        <p>
          This a React-based contacts and covid19 dashboard app. Here you can
          store your contacts, edit and delete them. Also in the covid19
          section, you can see the various data related to the cases of covid19
          countrywise and worldwide, providing essential information, including
          location in a world map and historical chart of the cases worldwide.
        </p>
        <a
          href="https://contact-management-covid-dashboard.netlify.app/"
          target="blank"
        >
          View Project
        </a>
        <a href="https://github.com/rajdeepX/Dashboard">View Project Code</a>
      </div>
      <div className="project-img-container">
        <a
          href="https://contact-management-covid-dashboard.netlify.app/"
          target="blank"
        >
          <img src={img} alt="ss" />
        </a>
      </div>
    </div>
  );
};
export default Project5;
