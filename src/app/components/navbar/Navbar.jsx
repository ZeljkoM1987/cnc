"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="/">
       <img src="/images/logo2.png" alt="logo" className={styles.logoimg}/>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "/images/closeIcon.png" : "/images/menuIcon.png"}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <div className={styles.language1}>
              <img src="/images/sr.png" alt="srp" className="styles.flag" />
              <img src="/images/en.png" alt="en" className="styles.flag" />
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.language}>
        <img src="/images/sr.png" alt="srp" className="styles.flag" />
        <img src="/images/en.png" alt="en" className="styles.flag" />
      </div>
    </nav>
  );
};
