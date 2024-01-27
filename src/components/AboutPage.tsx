import { Metadata } from 'next'
import Navbar from './Navbar';
import Footer from "@/components/Footer";
import  styles from "../styles/Content.module.css";

export const metadata: Metadata = {
  title: 'Jamel',
}
export default function Home() {
  return (
    <div>
      <Navbar />

      <main className={styles.main}>
        <div>
          <h1>About Me</h1>
          <p>This is where you can provide information about yourself or your business.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
