import styles from "./ProjectsStyles.module.css";
import onewordmood from "../../assets/one_word_mood.png";
import geminitutor from "../../assets/gemini.png";
import Bob from "../../assets/movie_rating.png";
import Youtube from "../../assets/youtube.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={onewordmood}
          link="https://github.com/ogulcanzorba/One_Word_Mood"
          h3="One Word Mood"
          p="Social Media App"
        />
        <ProjectCard
          src={geminitutor}
          link="https://github.com/ogulcanzorba/BTK_Akademi_Proje"
          h3="Gemini Supported Tutor"
          p="DS&Algorithms Tutor"
        />
        <ProjectCard
          src={Bob}
          link="https://github.com/boraeryazgan/BOB"
          h3="BOB"
          p="Movie Rating App"
        />
        <ProjectCard
          src={Youtube}
          link="https://github.com/ogulcanzorba/Youtube-Video-Parser"
          h3="Parser"
          p="Youtube Video Parser"
        />
      </div>
    </section>
  );
}

export default Projects;
