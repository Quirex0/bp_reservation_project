import React from 'react';
import Link from 'next/link';

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
      </div>
    </div>
  );
};
export default Footer;