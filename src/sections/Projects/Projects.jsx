import styles from "./ProjectsStyles.module.css";
import onewordmood from "../../assets/one_word_mood.png";
import geminitutor from "../../assets/gemini.png";
import Bob from "../../assets/movie_rating.png";
import Youtube from "../../assets/youtube.png";
// Add placeholder images for your major projects
import dockerAI from "../../assets/docker-ai.png"; // You'll need to add this
import miniOS from "../../assets/mini-os.png"; // You'll need to add this
import csharpOOP from "../../assets/csharp-oop.png"; // You'll need to add this
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        
        {/* Major CV Projects */}
        <ProjectCard
          src={dockerAI}
          link="https://github.com/ogulcanzorba/Docker_AI_Project" // Update with actual repo
          h3="Docker AI Project"
          p="AI tutor app with Docker containerization & microservices"
        />
        <ProjectCard
          src={miniOS}
          link="https://github.com/ogulcanzorba/Mini_OS_Project" // Update with actual repo
          h3="Mini OS Project"
          p="Custom OS with kernel development & process management"
        />
        <ProjectCard
          src={csharpOOP}
          link="https://github.com/ogulcanzorba/C_Sharp_OOP_Projects" // Update with actual repo
          h3="C# OOP Projects"
          p="Advanced OOP with design patterns & SOLID principles"
        />
        
        {/* Current Portfolio Projects */}
        <ProjectCard
          src={onewordmood}
          link="https://github.com/ogulcanzorba/One_Word_Mood"
          h3="One Word Mood"
          p="Full-stack social media app with real-time updates"
        />
        <ProjectCard
          src={geminitutor}
          link="https://github.com/ogulcanzorba/BTK_Akademi_Proje"
          h3="Gemini AI Tutor"
          p="AI-powered DS&A tutor using Gemini API"
        />
        <ProjectCard
          src={Bob}
          link="https://github.com/boraeryazgan/BOB"
          h3="BOB Movie Rating App"
          p="Collaborative movie rating & recommendation platform"
        />
      </div>
    </section>
  );
}

export default Projects;
