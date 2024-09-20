import React from 'react';
import Link from 'next/link';
import styles from "./Button.module.css";

const Button = ({ path, children }) => {
    return (
        <Link href={path} className={styles.button}>{children}</Link>
    );
};

export default Button;