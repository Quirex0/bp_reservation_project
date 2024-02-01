import React from 'react';
import Link from 'next/link';

const styles = {
  navLinks: 'text-sm p-3 m-5 underline underline-offset-4 rounded-xl hover:text-sky-800'
}

const Footer = () => {
  return (
    <div className='w-full'>
      <div className=' flex justify-center items-center bg-amber-200'>
        <div className=''>
          <p>
            Copyright &copy; {new Date().getFullYear()} Jitka Moučková <br />
          </p>
        </div>

        <div className="flex justify-evenly items-start">
          <Link
            className={styles.navLinks}
            href="/sluzby">
            <p>Služby</p>
          </Link>
          <Link
            className={styles.navLinks}
            href="/cenik">
            <p>Ceník</p>
          </Link>
          <Link
            className={styles.navLinks}
            href="/about">
            <p>O mně</p>
          </Link>
          <Link
            className={styles.navLinks}
            href="/provozovny">
            <p>Provozovny</p>
          </Link>
          <Link
            className={styles.navLinks}
            href="/kontakt">
            <p>Kontakt</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;