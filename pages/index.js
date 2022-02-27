import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Flag from '../components/Flag';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Flag />
      </main>

      <Footer />
    </div>
  );
}
