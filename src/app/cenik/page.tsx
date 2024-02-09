import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Masaze-jm',
}

export default function Cenik() {
  return (
    <div>
      <Navbar />

      <div className='flex w-full flex-wrap justify-center items-center p-2 mb-4 bg-customColor'>
        <div>
          <h1 className='md:text-7xl text-white font-serif uppercase p-8 whitespace-nowrap font-medium text-4xl'>Ceník služeb</h1>
        </div>
      </div>

      <div className='flex justify-center my-2'>
        <h2 className='md:text-5xl text-2xl text-customColor font-serif'>Masáže</h2>
      </div>

      
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-2 md:mb-0">
              <h3 className="md:text-2xl text-md">Shiatsu 120 minut</h3>
            </div>
            <div className="text-center md:text-xl text-md md:text-right">
              <p>1400 Kč</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-2 md:mb-0">
              <h3 className="md:text-2xl text-md">Klasická masáž 90 minut</h3>
            </div>
            <div className="text-center md:text-xl text-md md:text-right">
              <p>1000 Kč</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
