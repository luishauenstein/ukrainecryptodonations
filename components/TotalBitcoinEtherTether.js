import styled from 'styled-components';

const TextDiv = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem 0;
  @media screen and (min-width: 769px) {
    font-size: 2rem;
    padding: 1rem 0;
  }
  white-space: nowrap;
`;

const BTCSpan = styled.span`
  color: #f2a900;
  font-weight: 600;
`;

const ETHSpan = styled.span`
  color: #37367b;
  font-weight: 600;
`;

const USDTSpan = styled.span`
  color: #26a17b;
  font-weight: 600;
`;

export default function TotalBitcoinEtherTether(props) {
  return (
    <>
      <TextDiv>
        This includes <wbr />
        <BTCSpan>{props.amounts.btc} Bitcoin</BTCSpan> <wbr />
        (worth <BTCSpan>${props.amounts.btcUSD}</BTCSpan>)
      </TextDiv>
      <TextDiv>as well as</TextDiv>
      <TextDiv>
        <ETHSpan>{props.amounts.eth} Ether</ETHSpan> <wbr />
        (worth <ETHSpan>${props.amounts.ethUSD}</ETHSpan>) <wbr />
        and <wbr />
        <USDTSpan>{props.amounts.usdt} USDT</USDTSpan> (ERC-20).
      </TextDiv>
    </>
  );
}
