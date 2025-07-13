import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      
      {/* Programming Languages */}
      <div className={styles.categorySection}>
        <h3 className={styles.categoryTitle}>Programming Languages</h3>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="Python" />
          <SkillList src={checkMarkIcon} skill="C#" />
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="SQL" />
        </div>
      </div>
      
      {/* Frameworks & Libraries */}
      <div className={styles.categorySection}>
        <h3 className={styles.categoryTitle}>Frameworks & Libraries</h3>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill=".NET" />
          <SkillList src={checkMarkIcon} skill="Django" />
          <SkillList src={checkMarkIcon} skill="Ruby on Rails" />
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
          <SkillList src={checkMarkIcon} skill="Node.js" />
        </div>
      </div>
      
      {/* Cloud & DevOps */}
      <div className={styles.categorySection}>
        <h3 className={styles.categoryTitle}>Cloud & DevOps</h3>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Azure DevOps" />
          <SkillList src={checkMarkIcon} skill="Docker" />
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="GitHub" />
          <SkillList src={checkMarkIcon} skill="CI/CD" />
          <SkillList src={checkMarkIcon} skill="Webpack" />
        </div>
      </div>
      
      {/* Computer Science Fundamentals */}
      <div className={styles.categorySection}>
        <h3 className={styles.categoryTitle}>Computer Science</h3>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Data Structures & Algorithms" />
          <SkillList src={checkMarkIcon} skill="Object-Oriented Programming" />
          <SkillList src={checkMarkIcon} skill="System Design" />
          <SkillList src={checkMarkIcon} skill="Operating Systems" />
          <SkillList src={checkMarkIcon} skill="Database Design" />
          <SkillList src={checkMarkIcon} skill="API Development" />
        </div>
      </div>
      
      {/* Data & AI */}
      <div className={styles.categorySection}>
        <h3 className={styles.categoryTitle}>Data & AI</h3>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Data Analysis with Python" />
          <SkillList src={checkMarkIcon} skill="Generative AI Prompt Engineering" />
          <SkillList src={checkMarkIcon} skill="Machine Learning Basics" />
          <SkillList src={checkMarkIcon} skill="Pandas" />
          <SkillList src={checkMarkIcon} skill="NumPy" />
          <SkillList src={checkMarkIcon} skill="Data Visualization" />
        </div>
      </div>
      
      {/* Tools & Software */}
      <div className={styles.categorySection}>
        <h3 className={styles.categoryTitle}>Tools & Software</h3>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="VS Code" />
          <SkillList src={checkMarkIcon} skill="Postman" />
          <SkillList src={checkMarkIcon} skill="Jupyter Notebooks" />
          <SkillList src={checkMarkIcon} skill="Adobe Premiere Pro CC" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
