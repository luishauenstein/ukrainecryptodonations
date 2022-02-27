import styled from 'styled-components';

const AppFooter = styled.footer`
  display: flex;
  flex: 1;
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <AppFooter>
      <a href="https://twitter.com/luishauenstein" target="_blank" rel="noopener noreferrer">
        twitter.com/luishauenstein
      </a>
    </AppFooter>
  );
}
