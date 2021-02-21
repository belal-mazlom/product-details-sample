import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

export const ThemeContext = createContext({
  toggleTheme: () => {},
});


export const defaultTheme: DefaultTheme = {
  primaryColor: '#f2ebd9',
  secondaryColor: '#d9f2de',
  txtColor: '#2b2b2b',
  bgColor: '#FAFAFA',
  secondaryBgColor: '#E5E5E5',
  borderColor: '#2b2b2b',
}

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
}