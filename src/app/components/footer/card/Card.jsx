import React from "react";

import styles from "./Card.module.css";


export const Card = ({ title, text, image }) => {
    return (






        <div className={styles.card}>
            <div className={styles.face1}>
                <div className={styles.content}>
                    <span className={styles.stars}></span>
                    <p className={styles.java}>{text}</p>
                </div>
            </div>
            <div className={styles.face2}>
                <img className={styles.face2img} src={image} alt="cnc obrada metala Gradiška" />
                <h2>{title}</h2>
            </div>
        </div>










    );
};

