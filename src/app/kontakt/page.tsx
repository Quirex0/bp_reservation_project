import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Maps from '@/components/Maps';
import EmailForm from '@/components/EmailForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Masaze-jm',
}

export default function Kontakt() {
  return <div>
    <Navbar />

    <div className='flex w-full flex-wrap justify-center items-center mb-4 bg-customColor'>
      <div>
        <h1 className='lg:text-7xl md:text-5xl text-4xl text-white font-serif uppercase md:p-8 p-4 whitespace-nowrap font-medium'>Kontakt</h1>
      </div>
    </div>

    <div className='flex justify-center my-12'>
      <h2 className='lg:text-5xl md:text-4xl text-3xl text-customColor font-serif'>Kde mě můžete navštívit?</h2>
    </div>

    <div className='flex justify-center text-center'>
      <h3 className='flex justify-center whitespace-break-spaces lg:w-full w-1/2'>Provozuji služby na 3 různých místech a to v Praze a Plzni. Kvůli tomu je potřeba se objednat dopředu a domluvit si schůzku.</h3>
    </div>

    <div className='flex justify-center'>
      <h3>K tomu můžete využít formulář níže.</h3>
    </div>

    <div className="flex justify-center">
      <div className="max-w-screen-lg w-full mb-4">
        <div className="mt-8 text-center">
          <div className="lg:text-3xl md:text-2xl text-xl uppercase font-bold text-customColor font-serif mb-4">Praha 8 - Karlín</div>
          <Maps position={{ lat: 50.09294181512082, lng: 14.445950951564775 }} />
        </div>
        <div className="mt-8 text-center">
          <div className="lg:text-3xl md:text-2xl text-xl uppercase font-bold text-customColor font-serif mb-4">Praha 8 - Bohnice</div>
          <Maps position={{ lat: 50.13002431475894, lng: 14.42572258339464 }} />
        </div>
        <div className="mt-8 text-center">
          <div className="lg:text-3xl md:text-2xl text-xl uppercase font-bold text-customColor font-serif mb-4">Plzeň</div>
          <Maps position={{ lat: 49.74095934764675, lng: 13.375147190597444 }} />
        </div>
      </div>
    </div>

    <div className='flex justify-center my-12'>
      <h2 className='lg:text-5xl md:text-4xl text-3xl text-customColor font-serif'>Jak mě můžete kontaktovat?</h2>
    </div>

    <div className='flex flex-col lg:flex-row justify-center items-center'>
      <div className='flex flex-col lg:mr-20'>
        <h2 className='text-2xl m-4 font-serif'>Kontaktní informace:</h2>
        <div className='flex flex-col'>
          <div className='flex flex-row items-center'>
            <Image
              src="/telephone.png"
              alt="location pin"
              width={20}
              height={20}
              className="mr-2 ml-5"
            />
            <p className='text-xl m-2'> +420 724 557 167</p>
          </div>
          <div className='flex flex-row items-center'>
            <Image
              src="/email.png"
              alt="location pin"
              width={20}
              height={20}
              className="mr-2 ml-5"
            />
            <p className='text-xl m-2'> mouce@seznam.cz</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col m-4 lg:ml-20'>
        <div>
          <EmailForm />
        </div>
      </div>
    </div>

    <Footer />
  </div>
}
