import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ukraine Crypto Donations</title>
        <meta
          name="description"
          content="The crypto community supports Ukraine! See how much money we've raised for the cause and find out how you can support as well."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.flag}>
          <Image src="/flag.svg" alt="Ukraine Flag" layout="fill" />
        </span>
      </main>

      <footer className={styles.footer}>
        <a href="https://twitter.com/luishauenstein" target="_blank" rel="noopener noreferrer">
          twitter.com/luishauenstein
        </a>
      </footer>
    </div>
  );
}
