import styled from 'styled-components';

const AppFooter = styled.footer`
  text-align: center;
  padding: 1rem 0rem;
  padding-top: 3rem;
  color: ${(props) => props.theme.lowContrast};
`;

export default function Footer() {
  return (
    <AppFooter>
      <div>
        <a href="https://twitter.com/luishauenstein" target="_blank" rel="noopener noreferrer">
          DM to get in touch.
        </a>
      </div>
      <div>
        Included in this counter are the government addresses, the Return Alive Foundation addresses
        and UkraineDAO.
      </div>
    </AppFooter>
  );
}
