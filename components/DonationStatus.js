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

export default function DonationStatus(props) {
  return (
    <ComponentContainer>
      <TotalDonationsDollar amount={props.amountUSD} />
      <EmojiDiv>💙 💛</EmojiDiv>
      <TotalBitcoinEtherTether amounts={props.amountsCrypto} />
    </ComponentContainer>
  );
}
