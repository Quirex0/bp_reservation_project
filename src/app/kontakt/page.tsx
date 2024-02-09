import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Maps from '@/components/Maps';

export const metadata: Metadata = {
  title: 'Masaze-jm',
}

export default function Kontakt() {
  return <div>
    <Navbar />

    <div className='flex w-full flex-wrap justify-center items-center p-2 mb-4 bg-customColor'>
      <div>
        <h1 className='md:text-7xl text-white font-serif uppercase p-8 whitespace-nowrap font-medium text-4xl'>Kontakt</h1>
      </div>
    </div>

    <div className='flex justify-center my-12'>
      <h2 className='md:text-5xl text-2xl text-customColor font-serif'>Kde mě můžete navštívit?</h2>
    </div>

    <div className='flex justify-center'>
      <h3>Provozuji služby na 3 různých místech a to v Plzni, Praze a Berouně. Kvůli tomu je potřeba se objednat dopředu a domluvit si schůzku.</h3>
    </div>

    <div className='flex justify-center'>
      <h3>K tomu můžete využít formulář níže.</h3>
    </div>

    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full mb-4">
        <div className="mt-8 text-center">
          <div className="text-2xl uppercase text-customColor font-serif mb-4">Plzeň</div>
          <Maps position={{ lat: 49.74095934764675, lng: 13.375147190597444 }} />
        </div>
        <div className="mt-8 text-center">
          <div className="text-2xl uppercase text-customColor font-serif mb-4">Praha</div>
          <Maps position={{ lat: 48.8566, lng: 2.3522 }} />
        </div>
        <div className="mt-8 text-center">
          <div className="text-2xl uppercase text-customColor font-serif mb-4">Beroun</div>
          <Maps position={{ lat: 51.5074, lng: -0.1278 }} />
        </div>
      </div>
    </div>

    <Footer />
  </div>
}
