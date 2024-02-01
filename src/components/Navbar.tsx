"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const styles = {
  navLinks: 'text-lg p-3 m-5 underline underline-offset-4 hover:underline-offset-8 hover:text-sky-800'
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <div className='flex flex-[1] items-center justify-end overflow-hidden'>

        <div className="hidden justify-between md:flex">
          <div className="inline-block ">
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden sm:flex">
            <Link
              className={styles.navLinks}
              href="/sluzby">
              Služby
            </Link>
            <Link
              className={styles.navLinks}
              href="/cenik">
              Ceník
            </Link>
            <Link
              className={styles.navLinks}
              href="/about">
              O mně
            </Link>
            <Link
              className={styles.navLinks}
              href="/provozovny">
              Provozovny
            </Link>
            <Link
              className={styles.navLinks}
              href="/kontakt">
              Kontakt
            </Link>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}

            </button>
          </div>
        </div>

      </div>

      {isOpen && (
        <div className='flex basis-full flex-col items-center'>
          <div className="hidden sm:flex">
            <Link
              className={styles.navLinks}
              href="/sluzby">
              Služby
            </Link>
            <Link
              className={styles.navLinks}
              href="/cenik">
              Ceník
            </Link>
            <Link
              className={styles.navLinks}
              href="/about">
              O mně
            </Link>
            <Link
              className={styles.navLinks}
              href="/provozovny">
              Provozovny
            </Link>
            <Link
              className={styles.navLinks}
              href="/kontakt">
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
