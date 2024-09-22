"use client";

import React, { useState } from "react";
import styles from "./Hero1.module.css";
import { Slide } from "react-awesome-reveal";

export const Hero1 = () => {
  return (
    <>


      <div className={styles.hero}>
        <video autoPlay muted loop className={styles.herovideo} src="hero.mp4" ></video>

        <div className={styles.herotext5}>
          <Slide direction="down" >
            <h1>Preciznost</h1>
            </Slide>
            <Slide direction="left" >
            <h1>Pouzdanost</h1>
            </Slide>
            <Slide direction="up" >
            <h1>Odgovornost</h1>
            </Slide>
         
        </div>

      </div>
    </>
  );
};
