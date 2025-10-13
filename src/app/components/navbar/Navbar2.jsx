"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar2.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';

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

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };
  const { t } = useTranslation();

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
          <img src="/images/logo2.png" alt="Hefestcam Gradiska" className={styles.logoimg} />
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
              <Link href="/">{t('Navbar2.pocetna')}</Link>
            </li>
            <li className={pathname === "/about" ? `${styles.active}` : ""}>
              <Link href="/about">{t('Navbar2.onama')}</Link>
            </li>
            <li className={pathname === "/services" ? `${styles.active}` : ""}>
              <Link href="/services">{t('Navbar2.usluge')}</Link>
            </li>
             <li className={pathname === "/products" ? `${styles.active}` : ""}>
              <Link href="/products">{t('Navbar2.products')}</Link>
            </li>
            <li className={pathname === "/contact" ? `${styles.active}` : ""}>
              <Link href="/contact">{t('Navbar2.kontakt')}</Link>
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
          <img src="/images/sr.png" alt="srp" className="styles.flag"      onClick={() => changeLanguage('sr')}/>
          <img src="/images/en.png" alt="en" className="styles.flag" onClick={() => changeLanguage('en')} />
        </div>
      </nav>

      <nav className={`${styles.sidebar} ${menuOpen && styles.sidebarOpen}`}>
        <ul
          className={styles.menuItemsSidebar}
          onClick={() => setMenuOpen(false)}
        >
          <li className={pathname === "/" ? `${styles.active}` : ""}>
            <Link href="/">{t('Navbar2.pocetna')}</Link>
          </li>
          <li className={pathname === "/about" ? `${styles.active}` : ""}>
            <Link href="/about">{t('Navbar2.onama')}</Link>
          </li>
          <li className={pathname === "/services" ? `${styles.active}` : ""}>
            <Link href="/services">{t('Navbar2.usluge')}</Link>
          </li>
           <li className={pathname === "/products" ? `${styles.active}` : ""}>
            <Link href="/products">{t('Navbar2.products')}</Link>
          </li>
          <li className={pathname === "/contact" ? `${styles.active}` : ""}>
            <Link href="/contact">{t('Navbar2.kontakt')}</Link>
          </li>
          <li>
            <div className={styles.language1}>
              <img src="/images/sr.png" alt="srp hefestcam" className="styles.flag" onClick={() => changeLanguage('sr')} />
              <img src="/images/en.png" alt="en hefestcam" className="styles.flag"onClick={() => changeLanguage('en')} />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
