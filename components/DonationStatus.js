import styled from 'styled-components';
import TotalDonationsDollar from './TotalDonationsDollar';
import TotalBitcoinEtherTether from './TotalBitcoinEtherTether';

const ComponentContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.2rem;
  @media screen and (min-width: 769px) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const EmojiDiv = styled.div`
  font-size: 2rem;
  @media screen and (min-width: 769px) {
    font-size: 3rem;
  }
  padding: 3.5rem 0;
`;

const amountUSD = '15,204,587';
const amountsCrypto = {
  btc: '1,234',
  btcUSD: '2,345,987',
  eth: '5,678',
  ethUSD: '23,987,234',
  usdt: '90,827,349',
};

//func for turning int to currency string
const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default function DonationStatus() {
  return (
    <ComponentContainer>
      <TotalDonationsDollar amount={amountUSD} />
      <EmojiDiv>💙 💛</EmojiDiv>
      <TotalBitcoinEtherTether amounts={amountsCrypto} />
    </ComponentContainer>
  );
}
