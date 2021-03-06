import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    font-family: 'Open Sans', sans-serif;
    
  }
`;

const theme = {
  colors: {
    primary: "black",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
