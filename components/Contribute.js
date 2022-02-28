import styled from 'styled-components';
import TweetEmbed from 'react-tweet-embed';

const ContainerDiv = styled.div`
  max-width: 1200px;
  margin-top: 3rem;
`;

const TextDiv = styled.div`
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  @media screen and (min-width: 769px) {
    font-size: 1.4rem;
    padding: 3rem 0;
  }
  text-align: center;
  max-width: 800px;
`;

const GoDonate = styled.div`
  font-size: 1.5rem;
  padding: 3.5rem 0.5rem;
  @media screen and (min-width: 769px) {
    font-size: 2em;
    padding: 3rem 0;
    padding-bottom: 5rem;
  }
  text-align: center;
  max-width: 800px;
  font-weight: 600;
`;

export default function Contribute() {
  return (
    <ContainerDiv>
      <TextDiv>
        The funds were donated to official Bitcoin and Ethereum addresses that the Ukranian
        government has direct control of (Tweet below). <br />
      </TextDiv>
      <GoDonate>Go donate and make numba go up! 🇺🇦 </GoDonate>
      <TweetEmbed align="center" tweetId="1497594592438497282" />
    </ContainerDiv>
  );
}
