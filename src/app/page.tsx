import { Metadata } from 'next'
import Navbar from '../components/Navbar';
import Footer from "@/components/Footer";
import Calendar from "@/components/Calendar";

export const metadata: Metadata = {
  title: 'Masaze-jm',
}
export default function Home() {
  return (
    <div>
      <Navbar />

      <main className='flex w-full flex-wrap justify-center items-center p-2 mb-4 text-orange-200 bg-customColor'>
        <div>
          <h1 className='text-8xl m-8 pt-16 font-medium'>Oukey letsgo</h1>
        </div>

      </main>


      <div className='flex flex-col w-full justify-center items-center'>
        <div className='p-4'>
            <h2 className='text-5xl font-serif'>Rezervace</h2>
        </div>
        <div >
          <Calendar />
        </div>
      </div>



      <Footer />
    </div>
  );
}
