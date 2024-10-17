"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const styles = {
  navLinks: 'text-lg text-customColor font-serif font-medium uppercase lg:p-2 lg:m-5 m-2 p-1 whitespace-nowrap underline underline-offset-4 hover:underline-offset-8'
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
        Ceník služeb
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
  };

  return (
    <div className="sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between bg-white">
      <div className="inline-block ml-12">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={100}
            height={100}
            className="cursor-pointer m-2"
          />
        </Link>
      </div>

      <div className='flex w-1/3 justify-end mr-8'>
        <div className="justify-between lg:flex">
          <div className="hidden lg:flex">
            <NavLinks />
          </div>
          <div className='lg:hidden'>
            <button onClick={toggleNavbar}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='flex basis-full justify-center lg:hidden'>
          <div className="flex flex-col items-center">
            <NavLinks />
          </div>
        </div>
      )}
      <div className="sticky bg-customColor w-full h-6"></div>
    </div>
  );
};
export default Navbar;
