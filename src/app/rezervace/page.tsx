import { Metadata } from 'next'
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import Calendar from "@/components/Calendar";

export const metadata: Metadata = {
  title: 'Masaze-jm',
}
export default function Home() {
  return (
    <div>
      <Navbar />

      <main className='flex w-full flex-wrap justify-center items-center p-2 mb-4 text-white bg-customColor'>
        <div>
          <h1 className='md:text-7xl text-white font-serif uppercase p-8 whitespace-nowrap font-medium text-4xl'>Rezervace</h1>
        </div>

      </main>


      <div className='flex flex-col'>
        <div >
          <Calendar />
        </div>
      </div>

      <Footer />
    </div>
  );
}
