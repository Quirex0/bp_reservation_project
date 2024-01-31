import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className=" sticky top-0 z-[20] mx-auto flex w-full items-center justify-between p-8">
    <div className="flex justify-between items-center p-2 mb-4">
    <div className="mr-5">
      <a href="/">
        <img className="h-24 w-24" src="/logo.jpg" alt="Logo" />
      </a>
    </div>
    <div className="flex justify-evenly items-start">
          <Link  
          className="p-3 m-5 rounded-xl hover:bg-slate-400 focus-within:bg-slate-800 outline-none" 
          href="/sluzby">
            <p>Služby</p>
          </Link>
          <Link 
          className="p-3 m-5 rounded-xl hover:bg-slate-400 focus-within:bg-slate-800 outline-none"
          href="/cenik">
            <p>Ceník</p>
          </Link>
          <Link 
          className="p-3 m-5 rounded-xl hover:bg-slate-400 focus-within:bg-slate-800 outline-none"
          href="/about">
            <p>O mně</p>
          </Link>
          <Link 
          className="p-3 m-5 rounded-xl hover:bg-slate-400 focus-within:bg-slate-800 outline-none"
          href="/provozovny">
            <p>Provozovny</p>
          </Link>
          <Link 
          className="p-3 m-5 rounded-xl hover:bg-slate-400 focus-within:bg-slate-800 outline-none"
          href="/kontakt">
            <p>Kontakt</p>
          </Link>
        </div>
  </div></header>
);
};
export default Header;
