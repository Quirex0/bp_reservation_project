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

      <main className='flex w-full flex-wrap justify-center items-center mb-4 bg-customColor'>
        <div>
          <h1 className='lg:text-7xl md:text-5xl text-4xl text-white font-serif uppercase md:p-8 p-4 whitespace-nowrap font-medium'>Rezervace</h1>
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
