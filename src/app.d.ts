import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    txtColor: string;
    bgColor: string;
    secondaryBgColor: string;
    borderColor: string;
  }
};
