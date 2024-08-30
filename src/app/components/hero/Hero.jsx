"use client";

import React, { useState } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.imagewrap}>
      <img src="/images/hero3.jpg" />
      
      <h2 className={styles.text1}>POUZDANOST.</h2>
            <h2 className={styles.text2}>PRECIZNOST.</h2>
            <h2 className={styles.text3}>KVALITET.</h2>
     
    </div>
  );
};
