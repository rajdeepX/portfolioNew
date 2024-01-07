import img from "../../assets/img/blogSS.jpg";
import "./ProjectCard.css";

const Project1 = () => {
  return (
    <div className="project-detail">
      <div className="project-info">
        <h4>BlogSite</h4>
        <div className="tool-req">
          <p>Javascript</p>
          <p>React</p>
          <p>React Router</p>
          <p>Express</p>
          <p>NodeJs</p>
          <p>MongoDB</p>
        </div>
        <p>
          A fullstack MERN-powered blog platform, blogSite! Immerse yourself in
          a world of captivating content. Discover, read, and engage with a
          vibrant community of writers. Create an account, share your thoughts,
          and edit your blogs effortlessly. Unleash your creativity and be part
          of a thriving online ecosystem.
        </p>
        <a href="https://blogsite-mern-blog.onrender.com/" target="blank">
          View Project
        </a>
        <a href="https://github.com/rajdeepX/mern-blogSite" target="blank">
          View Project Code
        </a>
      </div>

      <div className="project-img-container">
        <a href="https://blogsite-mern-blog.onrender.com/" target="blank">
          <img src={img} alt="ss" />
        </a>
      </div>
    </div>
  );
};
export default Project1;
