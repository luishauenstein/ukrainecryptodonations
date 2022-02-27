import Footer from '../components/Footer';
import Flag from '../components/Flag';
import styled from 'styled-components';

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <MainContainer>
      <Flag />
      <Footer />
    </MainContainer>
  );
}
