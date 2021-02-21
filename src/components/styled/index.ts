import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica';
    src: url('/fonts/Helvetica-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Helvetica';
    src: url('/fonts/Helvetica-BoldOblique.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Helvetica';
    src: url('/fonts/Helvetica-Compressed.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Helvetica';
    src: url('/fonts/Helvetica-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Helvetica';
    src: url('/fonts/Helvetica-Oblique.ttf') format('truetype');
    font-weight: 400;
    font-style: oblique;
  }
  @font-face {
    font-family: 'Helvetica';
    src: url('/fonts/Helvetica-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Helvetica-Rounded';
    src: url('/fonts/helvetica-RoundedBold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 62.5% open-sans;
    box-sizing: border-box;
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    background-color: ${props => props.theme.bgColor};
    color: hsla(0, 0%, 0%, 0.8);
    color: ${props => props.theme.txtColor};
    font-family: 'Helvetica', 'Open sans', sans-serif;
    font-weight: normal;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    margin: 0;
    word-wrap: break-word;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
`;
