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
        src="https://avatars0.githubusercontent.com/u/42517354?s=460&v=4"
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
          href="https://github.com/pchandna24"
        >
          Github
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/parthchandna"
        >
          LinkedIn
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://parthchandna.tech"
        >
          My Website
        </a>
      </p>
    </div>
  );
}

export default Bio;
