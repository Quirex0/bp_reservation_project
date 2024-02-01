import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: 'Masaze-jm',
}

export default function Sluzby(){
    return <div>
    <Navbar />

    <main className=''>
      <div>
        <h1>Nabízené služby</h1>
      </div>
    </main>

    <Footer />
  </div>
}