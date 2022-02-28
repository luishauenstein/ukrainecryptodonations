import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const mainTheme = {
  bright: '#F5F3F5',
  dark: '#1B1B1E',
  lowContrast: '#A9B4C2',
  ukraineBlue: '#0057B7',
  ukraineYellow: '#FFD700',
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${(props) => props.theme.bright};
    color: ${(props) => props.theme.dark};
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Head>
        <title>Ukraine Crypto Donations</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
