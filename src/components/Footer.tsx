import React from 'react';
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <p>
          Copyright &copy; {new Date().getFullYear()} Jitka Moučková <br />
        </p>
      </div>

      <div className={styles.navLinks}>
        <a href="/sluzby">
          <p>Služby</p>
        </a>
        <a href="/cenik">
          <p>Ceník</p>
        </a>
        <a href="/about">
          <p>O mně</p>
        </a>
        <a href="/provozovny">
          <p>Provozovny</p>
        </a>
        <a href="/Kontakt">
          <p>Kontakt</p>
        </a>
      </div>
    </div>
  );
};
export default Footer;