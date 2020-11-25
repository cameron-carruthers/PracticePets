import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typography';
import { background } from './colors';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${primaryFont};
    background-color: ${background} !important;
  }

  main {
    width: 90%;
    margin: 0 auto;
  }

  h1 {
    font-size: 3.75rem;
    font-weight: 700;

    @media (max-width: 800px) {
      font-size: 2.125rem;
    }

    @media (max-height: 768px) and (min-width: 568px) {
      font-size: 2.125rem;
    }
  }

  h2 {
    font-size: 3.125rem;
    font-weight: 700;

    @media (max-width: 800px) {
      font-size: 2rem;
    }

    @media (max-height: 768px) and (min-width: 568px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 700;

    @media (max-width: 800px) {
      font-size: 1.75rem;
    }

    @media (max-height: 768px) and (min-width: 568px) {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: 1.875rem;
    font-weight: 700;

    @media (max-width: 800px) {
      font-size: 1.5rem;
    }

    @media (max-height: 768px) and (min-width: 568px) {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 700;

    @media (max-width: 800px) {
      font-size: 1.25rem;
    }

    @media (max-height: 768px) and (min-width: 568px) {
      font-size: 1.25rem;
    }
  }

  i {
    margin: 20px;
    color: white;
    cursor: pointer;
  }
`

// h1, footer {
//   flex: inline;
//   width: 290px;
//   margin: 20px auto;
//   text-align: center;
// }
/* button {
  height: 44px;
  margin: 20px;
  background: white;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 17px;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit
  box-shadow: none;
} */