import {createGlobalStyle} from 'styled-components';
import {primaryFont, desktopText, mobileText} from './typography';
import {background, primary, primaryTwo, neutral} from './colors';
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
`