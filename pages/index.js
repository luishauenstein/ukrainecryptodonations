import Footer from '../components/Footer';
import styled from 'styled-components';
import DonationStatus from '../components/DonationStatus';
import Contribute from '../components/Contribute';
import { ethers } from 'ethers';

//func for turning int to currency string
const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export async function getStaticProps() {
  // 192 backandalive
  const btcManualOffset = 192;
  // 2130 gov withdrawal + 126 backandalive + 1414 ukraineDAO
  const ethManualOffset = 2130 + 126 + 1418;
  // 1293993 gov withdrawal + 19000 backandalive
  const usdtManualOffset = 1293993 + 19000;

  //func runs ~170ms according to console.time()
  const mempoolApiRoute = 'https://mempool.space/api/address/357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P'; // BTC balance
  const etherscanEthBalanceRoute = `https://api.etherscan.io/api?module=account&action=balance&address=0x165CD37b4C644C2921454429E7F9358d18A45e14&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`; // ETH balance
  const etherscanUsdtBalanceRoute = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdAC17F958D2ee523a2206206994597C13D831ec7&address=0x165CD37b4C644C2921454429E7F9358d18A45e14&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`; // USDT balance
  const coingeckoCryptoPricesRoute = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd`; // BTC and ETH USD price

  const [resBtcFetch, resEthFetch, resUsdtFetch, resPricesFetch] = await Promise.all([
    fetch(mempoolApiRoute),
    fetch(etherscanEthBalanceRoute),
    fetch(etherscanUsdtBalanceRoute),
    fetch(coingeckoCryptoPricesRoute),
  ]);

  const [resBtcData, resEthData, resUsdtData, resPricesData] = await Promise.all([
    resBtcFetch.json(),
    resEthFetch.json(),
    resUsdtFetch.json(),
    resPricesFetch.json(),
  ]);
  const [btcAmount, ethAmount, usdtAmount, btcPrice, ethPrice] = await Promise.all([
    (await (resBtcData.chain_stats.funded_txo_sum + resBtcData.mempool_stats.funded_txo_sum)) /
      100000000 +
      btcManualOffset,
    parseInt(ethers.utils.formatEther(await resEthData.result)) + ethManualOffset,
    Math.floor((await resUsdtData.result) / 1000000) + usdtManualOffset,
    await resPricesData.bitcoin.usd,
    await resPricesData.ethereum.usd,
  ]);
  const [btc, btcUSD, eth, ethUSD, usdt] = await Promise.all([
    Math.floor(btcAmount),
    Math.floor(btcAmount * btcPrice),
    Math.floor(ethAmount),
    Math.floor(ethAmount * ethPrice),
    usdtAmount,
  ]);
  const amountUSD = formatNumber(btcUSD + ethUSD + usdt);
  const amountsCrypto = {
    btc: formatNumber(btc),
    btcUSD: formatNumber(btcUSD),
    eth: formatNumber(eth),
    ethUSD: formatNumber(ethUSD),
    usdt: formatNumber(usdt),
  };

  return {
    props: {
      amountUSD,
      amountsCrypto,
    },
    revalidate: 30, //incremental static regeneration every 30 secs
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
      <DonationStatus amountUSD={props.amountUSD} amountsCrypto={props.amountsCrypto} />
      <Contribute />
      <Footer />
    </MainContainer>
  );
}
