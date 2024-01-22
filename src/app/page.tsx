import Image from "next/image";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    
    <main className={styles.main}>
      
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.jpg"
          alt="Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className={styles.navbar}>
                <a>Domů</a>
                <a>O nás</a>
                <a>Služby</a>
                <a>Pobočky</a>
                <a>Kontakt</a>
            </div>
      
    </main>
  );
}
