"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar2.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);
  const pathname = usePathname();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <>
      <nav
        className={
          navbarColor
            ? `${styles.navbar} ${styles.navbarScrolled}`
            : `${styles.navbar}`
        }
      >
        <a className={styles.logo} href="/">
          <img src="/images/logo2.png" alt="logo" className={styles.logoimg} />
        </a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={menuOpen ? "/images/closeIcon.png" : "/images/menuIcon.png"}
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul className={styles.menuItems}>
            <li className={pathname === "/" ? `${styles.active}` : ""}>
              <Link href="/">Početna</Link>
            </li>
            <li className={pathname === "/about" ? `${styles.active}` : ""}>
              <Link href="/about">O nama</Link>
            </li>
            <li className={pathname === "/services" ? `${styles.active}` : ""}>
              <Link href="/services">Usluge</Link>
            </li>
            <li className={pathname === "/contact" ? `${styles.active}` : ""}>
              <Link href="/contact">Kontakt</Link>
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

      <nav className={`${styles.sidebar} ${menuOpen && styles.sidebarOpen}`}>
        <ul
          className={styles.menuItemsSidebar}
          onClick={() => setMenuOpen(false)}
        >
          <li className={pathname === "/" ? `${styles.active}` : ""}>
            <Link href="/">Početna</Link>
          </li>
          <li className={pathname === "/about" ? `${styles.active}` : ""}>
            <Link href="/about">O nama</Link>
          </li>
          <li className={pathname === "/services" ? `${styles.active}` : ""}>
            <Link href="/services">Usluge</Link>
          </li>
          <li className={pathname === "/contact" ? `${styles.active}` : ""}>
            <Link href="/contact">Kontakt</Link>
          </li>
          <li>
            <div className={styles.language1}>
              <img src="/images/sr.png" alt="srp" className="styles.flag" />
              <img src="/images/en.png" alt="en" className="styles.flag" />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
