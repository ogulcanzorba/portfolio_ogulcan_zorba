import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import LinkedInIcon from "../../assets/linkedin-light.svg";
import GithubIcon from "../../assets/github-light.svg";
import CV from "../../assets/cv.pdf";

function Hero() {
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
