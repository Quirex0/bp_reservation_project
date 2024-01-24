import React from 'react';
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
    <div className={styles.logoContainer}>
      <a href="/">
        <img className={styles.logo} src="/logo.jpg" alt="Logo" />
      </a>
    </div>
    <div className={styles.navLinks}>
      <a href="/">Domů</a>
      <a href="/info">O nás</a>
      <a href="/sluzby">Služby</a>
      <a href="/office">Pobočky</a>
      <a href="/kontakt">Kontakt</a>
    </div>
  </div>
);
};
export default Navbar;
