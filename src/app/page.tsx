import { Metadata } from 'next'
import Navbar from '../components/Navbar';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Masaze-jm',
}
export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <div className='flex w-full flex-wrap justify-center items-center mb-4 bg-customColor'>
          <h1 className='lg:text-7xl md:text-5xl text-4xl text-white font-serif uppercase md:p-8 p-4 whitespace-nowrap font-medium'>
            Vítejte
          </h1>
        </div>

        <div className='flex flex-col lg:flex-row'>
          <div className='flex justify-center items-center'>
            <h2 className='flex text-xl w-1/2'>
              Mé stránky můžete použít k rezervaci či jako informativní zdroj ať už o daných metodách nebo o mně...
            </h2>
          </div>
          <div className='flex justify-center'>
            <div className='m-4'>
              <img className="rounded-2xl h-auto max-w-xs md:max-w-sm" src="/vizitky.jpg" alt="vizitky" />
            </div>
          </div>
        </div>


      </main>



      <Footer />
    </div>
  );
}
