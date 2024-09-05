import React from "react";

import styles from "./card.module.css";


export const Card = () => {
  return (






 <div className={styles.card}>
  <div className={styles.face1}>
    <div className={styles.content}>
      <span className={styles.stars}></span>
      <h2 className={styles.java}>Java</h2>
      <p className={styles.java}>Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
    </div>
  </div>
  <div className={styles.face2}>
    <img className={styles.face2img} src="/brain.svg" alt="" />
    <h2>stručno osoblje</h2>
  </div>
</div>










  );
};

