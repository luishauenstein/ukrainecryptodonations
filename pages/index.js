import Footer from '../components/Footer';
import styled from 'styled-components';
import DonationStatus from '../components/DonationStatus';
import Contribute from '../components/Contribute';
import { ethers } from 'ethers';

//func for turning int to currency string
const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

//gets floating point btc balance
async function fetchBTC(address) {
  const res = await fetch(`https://mempool.space/api/address/${address}`);
  const resJson = await res.json();
  const btcAmount =
    (await (resJson.chain_stats.funded_txo_sum + resJson.mempool_stats.funded_txo_sum)) / 100000000;
  return btcAmount;
}

async function fetchETHBalance(address) {
  const res = await fetch(
    `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`
  );
  const resJson = await res.json();
  const ethAmount = parseFloat(ethers.utils.formatEther(await resJson.result));
  return ethAmount;
}

async function fetchUSDTBalance(address) {
  const res = await fetch(
    `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdAC17F958D2ee523a2206206994597C13D831ec7&address=${address}&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`
  );
  const resJson = await res.json();
  const usdtAmount = (await resJson.result) / 1000000;
  return usdtAmount;
}

async function fetchCryptoPrices() {
  const route = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd`; // BTC and ETH USD price
  const res = await fetch(route);
  const resJson = await res.json();
  const prices = {
    btc: await resJson.bitcoin.usd,
    eth: await resJson.ethereum.usd,
  };
  return prices;
}

export async function getStaticProps() {
  // 2130 gov withdrawal + 131 backandalive + 1502 ukraineDAO
  const ethManualOffset = 0; //2443 + 131 + 1502;
  // 1,720,996 gov withdrawal + 22000 backandalive
  const usdtManualOffset = 0; //1720996 + 22000;

  const [
    backandaliveBTC,
    backandaliveETHBalance,
    backandaliveUSDTBalance,
    governmentBTC,
    governmentETHBalance,
    governmentUSDTBalance,
    prices,
  ] = await Promise.all([
    //backandalive
    fetchBTC('bc1qkd5az2ml7dk5j5h672yhxmhmxe9tuf97j39fm6'),
    fetchETHBalance('0xa1b1bbB8070Df2450810b8eB2425D543cfCeF79b'),
    fetchUSDTBalance('0xa1b1bbB8070Df2450810b8eB2425D543cfCeF79b'),
    //government ukraine
    fetchBTC('357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P'),
    fetchETHBalance('0x165CD37b4C644C2921454429E7F9358d18A45e14'),
    fetchUSDTBalance('0x165CD37b4C644C2921454429E7F9358d18A45e14'),
    //prices
    fetchCryptoPrices(),
  ]);

  const [btcAmount, ethAmount, usdtAmount, btcPrice, ethPrice] = await Promise.all([
    Math.floor(backandaliveBTC + governmentBTC),
    Math.floor(backandaliveETHBalance + governmentETHBalance + ethManualOffset),
    Math.floor(backandaliveUSDTBalance + governmentUSDTBalance + usdtManualOffset),
    prices.btc,
    prices.eth,
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
