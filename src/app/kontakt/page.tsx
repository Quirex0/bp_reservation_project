import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

    <div className="flex justify-center">
      <div className="max-w-screen-lg w-full px-4">


      </div>

    </div>

    <Footer />
  </div>
}