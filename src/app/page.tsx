import { Metadata } from 'next'
import Header from '../Components/Header';
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: 'Masaze-jm',
}
export default function Home() {
  return (
    <div>
      <Header />

      <main className='flex justify-center items-center p-2 mb-4 bg-amber-200'>
        <div>
          <h1 className='text-6xl font-medium'>Oukey letsgo</h1>
        </div>
      </main>


      <Footer />
    </div>
  );
}
