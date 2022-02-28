import styled from 'styled-components';

const TextDiv = styled.div`
  padding: 0.5rem 0;
  padding-top: 3.5rem;
  font-size: 1.5rem;
  @media screen and (min-width: 769px) {
    font-size: 2rem;
    padding: 1rem 0;
    padding-top: 5.5rem;
  }
`;

const NumberDiv = styled.div`
  font-size: 3rem;
  padding-top: 2rem;
  @media screen and (min-width: 769px) {
    font-size: 6rem;
    padding-top: 4.5rem;
  }
  font-weight: 800;
  letter-spacing: 1.5;
  text-align: center;
  //gradient text
  background-color: #ffd700; // fallback
  background-image: linear-gradient(25deg, #0057b7 0% 30%, #ffd700 50% 100%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export default function TotalDonationsDollar(props) {
  return (
    <>
      <TextDiv>The crypto community so far has raised</TextDiv>
      <NumberDiv>${props.amount}</NumberDiv>
      <TextDiv>to support Ukraine.</TextDiv>
    </>
  );
}
