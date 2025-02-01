import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import LinkedInLight from "../../assets/linkedin-light.svg";
import LinkedInDark from "../../assets/linkedin-dark.svg";
import GithubLight from "../../assets/github-light.svg";
import GithubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const LinkedInIcon = theme === "light" ? LinkedInLight : LinkedInDark;
  const GithubIcon = theme === "light" ? GithubLight : GithubDark;

  return (
    <section id="hero" className="">
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
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
        <h2>CSE Student</h2>
        <span>
          <a href="https://www.linkedin.com/in/ogulcanzorba" target="_blank">
            <img src={LinkedInIcon} alt="LinkedIn icon" />
          </a>
          <a href="https://www.github.com/ogulcanzorba" target="_blank">
            <img src={GithubIcon} alt="Github icon" />
          </a>
        </span>
        <p>
          CS Engineering student with a passion for creating scalable tech
          solutions.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
