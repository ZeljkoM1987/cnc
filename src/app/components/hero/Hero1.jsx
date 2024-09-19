"use client";

import React, { useState } from "react";
import styles from "./Hero1.module.css";


export const Hero1 = () => {
  return (
    <>
   

    <div className={styles.hero}>
        <video autoPlay muted loop className={styles.herovideo} src="hero.mp4" ></video>

        <div className={styles.herotext5}>
            <h1>Preciznost</h1>
            <h1>Pouzdanost</h1>
            <h1>Odgovornost</h1>
        </div>
    </div>
    </>
  );
};
