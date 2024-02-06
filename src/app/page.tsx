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

      <main className='flex w-full flex-wrap justify-center items-center p-2 mb-4 text-orange-200 bg-customColor'>
        <div>
          <h1 className='text-8xl m-8 pt-16 font-medium'>Oukey letsgo</h1>
        </div>
        
      </main>


      <Footer />
    </div>
  );
}
