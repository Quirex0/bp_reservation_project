import { Metadata } from 'next'
import Navbar from "@/Components/Header";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: 'Masaze-jm',
}

export default function Kontakt(){
    return <div>
    <Navbar />

    <main className=''>
      <div>
        <h1>Kontakty</h1>
      </div>
    </main>

    <Footer />
  </div>
}