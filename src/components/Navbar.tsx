"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const styles = {
  navLinks: 'text-lg text-customColor font-serif font-medium uppercase md:p-3 md:m-5 p-2 m-0 whitespace-nowrap underline underline-offset-4 hover:underline-offset-8'
}

const NavLinks = () => {
  return (
    <>
      <Link className={styles.navLinks}
        href="/rezervace">
        Rezervace
      </Link>
      <Link className={styles.navLinks}
        href="/sluzby">
        Služby
      </Link>
      <Link className={styles.navLinks}
        href="/cenik">
        Ceník služeb
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);

    console.log(isOpen)
  };

  return (
    <div className="sticky top-0 z-[20] mx-auto flex w-full p-2 flex-wrap items-center justify-between bg-white">
      <div className="inline-block ml-12">
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
      <div className='flex w-1/3 justify-end mr-8'>

        <div className="justify-between md:flex">

          <div className="hidden md:flex">
            <NavLinks />
          </div>
          <div className='md:hidden'>
            <button onClick={toggleNavbar}> {isOpen ? <X /> : <Menu />}

            </button>
          </div>
        </div>

      </div>

      {isOpen && (
        <div className='flex basis-full justify-center md:hidden'>
          <div className="flex flex-col items-center">
            <NavLinks />
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
