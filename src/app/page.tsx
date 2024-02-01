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

      <main className='flex w-full justify-center items-center p-2 mb-4 bg-amber-200'>
        <div>
          <h1 className='text-6xl font-medium'>Oukey letsgo</h1>
        </div>
      </main>


      <Footer />
    </div>
  );
}
