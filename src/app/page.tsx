import Image from "next/image";
import styles from "../styles/page.module.css";
import { Metadata } from 'next'
import Navbar from '../components/Navbar';
 
export const metadata: Metadata = {
  title: 'My Page Title',
}
export default function Home() {
  return (
    
      <Navbar />
  );
}
