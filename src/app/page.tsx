import { Metadata } from 'next'
import Navbar from '../Components/Navbar';
import Footer from "@/components/Footer";
import  styles from "../styles/Content.module.css";

export const metadata: Metadata = {
  title: 'Masaze - jm',
}
export default function Home() {
  return (
    <div>
      <Navbar />

      <main className={styles.main}>
        <div>
          <h1>Oukey letsgo</h1>
        </div>
      </main>


      <Footer />
    </div>
  );
}
