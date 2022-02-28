import Footer from '../components/Footer';
import styled from 'styled-components';
import DonationStatus from '../components/DonationStatus';
import Contribute from '../components/Contribute';

export async function getStaticProps() {
  //fetch URLs
  const mempoolApiRoute = 'https://mempool.space/api/address/357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P'; // BTC balance
  const etherscanEthBalanceRoute = `https://api.etherscan.io/api?module=account&action=balance&address=0x165CD37b4C644C2921454429E7F9358d18A45e14&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`; // ETH balance
  const etherscanUsdtBalanceRoute = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdAC17F958D2ee523a2206206994597C13D831ec7&address=0x165CD37b4C644C2921454429E7F9358d18A45e14&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`; // USDT balance
  const coingeckoCryptoPricesRoute = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd`; // BTC and ETH USD price

  const resBtcFetch = await fetch(mempoolApiRoute);
  console.log(await resBtcFetch.json());
  const resEthFetch = await fetch(etherscanEthBalanceRoute);
  const resUsdtFetch = await fetch(etherscanUsdtBalanceRoute);
  const resPricesFetch = await fetch(coingeckoCryptoPricesRoute);

  return {
    props: {
      // amountUSD,
      // amountsCrypto,
      //mempoolApiRoute,
    },
  };
}

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
`;

export default function Home(props) {
  return (
    <MainContainer>
      <DonationStatus />
      <Contribute />
      <Footer />
    </MainContainer>
  );
}
