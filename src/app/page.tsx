import { Metadata } from 'next'
import Navbar from '../components/Navbar';
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Masaze-jm',
}
export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <div className='flex w-full flex-wrap justify-center items-center p-2 mb-4 text-white bg-customColor'>
          <h1 className='text-7xl m-8 font-medium'>
            Vítejte
          </h1>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <h2 className='text-xl'>
              Mé stránky můžete použít k rezervaci či jako informativní zdroj ať už o daných metodách nebo o mně...
            </h2>
          </div>
          <div className='flex justify-center'>
            <div className='m-4'>
              <Image className="rounded-2xl" src="/vizitky.jpg" alt="vizitky" width={350} height={200} />
            </div>
          </div>
        </div>


      </main>



      <Footer />
    </div>
  );
}
