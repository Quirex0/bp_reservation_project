import React from 'react';
import Link from 'next/link';

const styles = {
  navLinks: 'text-sm whitespace-nowrap m-5 underline underline-offset-4 rounded-xl hover:text-sky-800'
}

const NavLinks = () => {
  return (
    <>
      <Link className={styles.navLinks}
        href="/sluzby">
        Služby
      </Link>
      <Link className={styles.navLinks}
        href="/cenik">
        Ceník
      </Link>
      <Link className={styles.navLinks}
        href="/about">
        O mně
      </Link>
      <Link className={styles.navLinks}
        href="/provozovny">
        Provozovny
      </Link>
      <Link className={styles.navLinks}
        href="/kontakt">
        Kontakt
      </Link>
    </>
  )
}

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-evenly items-center bg-amber-200'>
        <div className='whitespace-nowrap'>
          <p>
            Copyright &copy; {new Date().getFullYear()} Jitka Moučková <br />
          </p>
        </div>

        <div className="md:flex hidden">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};
export default Footer;