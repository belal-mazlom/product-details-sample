import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { defaultTheme, darkTheme } from '@styled/theme';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@components/styled';
import { debounce } from '@utils/helper';
import AppContext from '@utils/app-context';

const toggleTheme = (setTheme: Dispatch<SetStateAction<DefaultTheme>>) => {
  return () => {
    setTheme((theme: DefaultTheme) => (theme === defaultTheme ? darkTheme : defaultTheme));
  };
};

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(defaultTheme);
  const [size, setSize] = useState(typeof window !== 'undefined' ?  {
    width: window.innerWidth,
    height: window.innerHeight,
  }: {
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    const debouncedHandleResize = debounce(handleResize, 1000);
    window.addEventListener('resize', debouncedHandleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={{
      toggleTheme: toggleTheme(setTheme),
      size,
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />;
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
