import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/olci.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Oğulcan Zorba"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Oğulcan
          <br />
          Zorba
        </h1>
        <h2>CS Engineering Student</h2>
        <span>
          <a href="https://github.com/ogulcanzorba" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/ogulcanzorba" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          CS Engineering student with a passion for creating scalable tech
          solutions.
        </p>
        <div className={styles.buttonGroup}>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <button className="hover">Resume</button>
          </a>
          <a href="/IWIS2025s.pdf" target="_blank" rel="noopener noreferrer">
            <button className="hover">IWIS 2025 Article</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
