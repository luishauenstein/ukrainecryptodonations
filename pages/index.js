import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HeadComponent from '../components/HeadComponent';
import Footer from '../components/Footer';
import Flag from '../components/Flag';

export default function Home() {
  return (
    <div>
      <HeadComponent />

      <main className={styles.main}>
        <Flag />
      </main>

      <Footer />
    </div>
  );
}
