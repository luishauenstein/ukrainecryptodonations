import Head from 'next/head';

export default function HeadComponent() {
  return (
    <Head>
      <title>Ukraine Crypto Donations</title>
      <meta
        name="description"
        content="The crypto community supports Ukraine! See how much money we've raised for the cause and find out how you can support as well."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
