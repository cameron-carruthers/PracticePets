import {createGlobalStyle} from 'styled-components';
// @ts-ignore
import {primaryFont, desktopText, mobileText} from './typography.ts';
// @ts-ignore
import {background, primary, primaryTwo} from './colors.ts';
import {normalize} from 'polished';

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
    margin: 0;

    @media (max-width: 450px) {
      font-size: 2.125rem;
    }
  }

  h2 {
    font-size: 3.125rem;
    font-weight: 700;
    margin: 0;

    @media (max-width: 450px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;

    @media (max-width: 450px) {
      font-size: 1.75rem;
    }

    ${'' /* For Galaxy Fold and other very small screen sizes */}
    @media (max-width: 350px) {
      font-size: 1.25rem;
    }
  }

  h4 {
    font-size: 1.875rem;
    font-weight: 700;
    margin: 0;

    @media (max-width: 450px) {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;

    @media (max-width: 450px) {
      font-size: 1.25rem;
    }
  }

  i {
    margin: 20px;
    color: white;
    cursor: pointer;

    @media (max-width: 600px) {
      margin: 10px;
    }
  }

  i:focus {
    outline: 3px solid white;
    outline-offset: 2px;
  }

  label {
    width: 100%;
    margin-bottom: 10px;
    font-size: ${desktopText.mediumText};

    @media (max-width: 600px) {
      font-size: ${mobileText.mediumText};
    }
  }

  select {
    background: white;
    border: 2px solid ${primaryTwo};
    border-radius: 20px;
    width: 100%;
    height: 44px;
    margin: 10px 0;
    padding: 10px;
  }

  select:focus {
    outline: 3px solid ${primary};
    outline-offset: 2px;
  }

  textarea {
    background: white;
    border: 2px solid ${primaryTwo};
    border-radius: 20px;
    width: 100%;
    height: 100px;
    margin: 10px 0;
    padding: 10px;

    @media (max-width: 600px) {
      height: 60px;
    }
  }

  textarea:focus {
    outline: 3px solid ${primary};
    outline-offset: 2px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    margin: 0;
  }
`