import { useState } from 'react';
import type { AppProps } from 'next/app';
import { defaultTheme, darkTheme, ThemeContext } from '@styled/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@components/styled';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = () => {
    if (theme === defaultTheme) {
      return setTheme(darkTheme);
    }
    return setTheme(defaultTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />;
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
