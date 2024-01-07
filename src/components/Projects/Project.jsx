import Project1 from "../ProjectCard/Project1";
import Project2 from "../ProjectCard/Project2";
import Project3 from "../ProjectCard/Project3";
import Project4 from "../ProjectCard/Project4";
import Project5 from "../ProjectCard/Project5";

const Project = () => {
  return (
    <section className="portfolio-section__project">
      <div className="project-box">
        <div className="project-head">
          <h2>
            My Projects <hr className="project-head__line" />
          </h2>
        </div>
        <div className="projects-box__projects">
          <Project1 />
          <Project2 />
          <Project3 />
          <Project4 />
          <Project5 />
        </div>
      </div>
    </section>
  );
};
export default Project;
