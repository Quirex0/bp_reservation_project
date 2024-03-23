import React from 'react';
import Link from 'next/link';

const styles = {
  navLinks: 'text-sm whitespace-nowrap m-5 underline underline-offset-4 rounded-xl hover:text-sky-800',
  navLinksSmallScreen: 'text-sm whitespace-nowrap m-2 underline underline-offset-4 rounded-xl hover:text-sky-800',
}

const NavLinks = () => {
  return (
    <>
      <Link className={styles.navLinks + ' hidden md:block'}
        href="/sluzby">
        Služby
      </Link>
      <Link className={styles.navLinks + ' hidden md:block'}
        href="/cenik">
        Ceník
      </Link>
      <Link className={styles.navLinks + ' hidden md:block'}
        href="/provozovny">
        Provozovny
      </Link>
      <Link className={styles.navLinks + ' hidden md:block'}
        href="/kontakt">
        Kontakt
      </Link>

    </>
  )
}

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='md:flex-row flex-col flex justify-evenly items-center text-white p-4 md:p-0 bg-customColor'>
        <div className='flex whitespace-nowrap'>
          <p>
            Copyright &copy; {new Date().getFullYear()} Jitka Moučková <br />
          </p>
        </div>

        <div className="md:flex md:flex-row flex items-center flex-col">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};
export default Footer;
