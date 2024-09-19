"use client";
import React, { useState, useContext } from "react";
import { MenuItems } from "./MenuItems";
import styles from "./Navbar1.module.css";
import Link from "next/link";
import { LoungeContext } from "../context"


export const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {height}  = useContext(LoungeContext);
  return (
    <nav
      className={styles.NavBarItems2}
      style={{ background: height > 100 ? "whitesmoke" : "transparent" }}
    >
      <div
        className={styles.NavBar2logo}
        style={{ color: menuOpen || height > 100 ? "black" : "whitesmoke" }}
      >
        <img
        alt="logo"
          src="/logo.svg"
          className={styles.logo2}
          style={{
            filter:
              menuOpen || height > 100
                ? "invert(0%) sepia(7%) saturate(4797%) hue-rotate(324deg) brightness(112%) contrast(87%)"
                : "invert(100%) sepia(1%) saturate(141%) hue-rotate(54deg) brightness(115%) contrast(87%)",
          }}
        ></img>
        {/*<i className="fa-sharp fa-solid fa-utensils logo2"></i>*/}
        <div>
          <h2>lounge caffe</h2>
          <h1>Centar</h1>
        </div>
      </div>
      <div className={styles.menu2icons} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <i className="fa fa-times close2"></i>
        ) : (
          <i
            className="fas fa-hamburger"
            style={{ color: height > 100 ? "black" : "whitesmoke" }}
          ></i>
        )}
      </div>

      <ul className={menuOpen ?`${styles.nav2menu } active` : `${styles.nav2menu}` }>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
               style={{ color: height > 100 ? "black" : "whitesmoke" }}
                className={({ isActive }) =>
                  isActive ? `${item.cssname} active2` : item.cssname
                }    
                href={item.url}
                onClick={() => setMenuOpen(false)}
              >
                 {item.title}
              </Link>
            </li>
          );
        })}
     
      </ul>
    </nav>
  );
};