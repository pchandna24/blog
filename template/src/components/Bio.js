import React from "react";
import styles from "./Bio.module.css";

function Bio(props) {
  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img
        src="https://avatars0.githubusercontent.com/u/31814079?s=460&v=4"
        alt="Me"
      />
      <p>
        Welcome to my blog, I post few tech articles here mostly in Frontend Web
        development and Machine Learning.
        <br />
        Lets get connected!
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/blackwolf08"
        >
          Github
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/sunnydhama"
        >
          LinkedIn
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://sunnydhama.me"
        >
          My Website
        </a>
      </p>
    </div>
  );
}

export default Bio;
