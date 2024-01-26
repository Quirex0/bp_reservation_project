import { Metadata } from 'next'
import Navbar from '../components/Navbar';
import Footer from "@/components/Footer";
 
export const metadata: Metadata = {
  title: 'My Page Title',
}
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Obsah stránky */}
        <h1>Vítejte na stránce</h1>
        <p>Toto je obsah stránky.</p>
      </main>
      <Footer />
    </div>
  );
}
