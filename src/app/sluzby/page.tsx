import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Masaze-jm',
}

export default function Sluzby() {
  return <div>
    <Navbar />

    <div className='flex w-full flex-wrap justify-center items-center p-2 mb-4 bg-customColor'>

      <div>
        <h1 className='md:text-7xl text-white font-serif uppercase p-8 whitespace-nowrap font-medium text-4xl'>Nabízené služby</h1>
      </div>

    </div>

    <div className='flex items-center p-4 flex-col'>

      <div className='flex justify-evenly w-full'>
        <div className='p-4'>
          <p>haha</p>
        </div>

        <div className='block items-center '>
          <h3 className='text-2xl text-customColor font-serif'>Shiatsu masáž</h3>
          <div className='break-words'>
            <p>Tady bude text o shiatsu masážích, o kterých vím velký prd. Bude tady nějaký dlouhý článek, který bude muset být uspořádaný do bloku.</p>
          </div>
        </div>

      </div>


        <div className='flex justify-evenly w-full'>
          <div className='p-4'>
            <p>haha</p>
          </div>

          <div className='block items-center content-end '>
            <h3 className='text-2xl text-customColor font-serif'>Klasická masáž</h3>
            <div className='break-words'>
              <p>Tady bude text o klasických masážích, o kterých vím taky velký prd. Bude tady nějaký dlouhý článek, který bude muset být uspořádaný do bloku.</p>
            </div>
          </div>

        </div>

      <div className='flex justify-evenly w-full'>
        <div className='p-4'>
          <p>haha</p>
        </div>
        <div className='p-4'>
          <p>hihi</p>
        </div>
      </div>

    </div>

    <Footer />
  </div>
}