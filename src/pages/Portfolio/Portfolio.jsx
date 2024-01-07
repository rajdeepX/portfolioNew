import Contacts from "../../components/Contact/Contacts";
import Footer from "../../components/Footer/Footer";
import Project from "../../components/Projects/Project";
import Skills from "../../components/Skills/Skills";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio-container__main">
      <Skills />
      <Project />;
      <Contacts />
      <Footer />
    </section>
  );
};
export default Portfolio;
