import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`${css`
  ${reset}
  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  @font-face {
    font-family: 'NeoDunggeunmo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`}`;

export default GlobalStyle;
