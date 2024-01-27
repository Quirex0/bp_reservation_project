import { Metadata } from 'next'
import Navbar from '../components/Navbar';
import Footer from "@/components/Footer";
import Content from "@/components/Content";


export const metadata: Metadata = {
  title: 'Jamel',
}
export default function Home() {
  return (
    <div>
      <Navbar />

      <Content />

      <Footer />
    </div>
  );
}
