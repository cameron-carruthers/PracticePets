import styled from 'styled-components';
import { primary } from '../utils';
import { desktopText, mobileText } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${desktopText.mainText};
    padding: 8px 12px;
  `,
  large: () => `
    font-size: ${desktopText.introText};
    font-weight: 700;
    padding: 16px 24px;
    border-radius: 100px;
  `
}

const Button = styled.button`
  word-wrap: none;
  min-width: 100px;
  padding: 8px 12px;
  font-size: ${desktopText.mainText};
  border-radius: 20px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset, rgba(23, 0, 102, 0.2) 0px 20px 40px, rgba(0, 0, 0, 0.1) 0px 1px 3px;
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear, transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  margin: 0 20px;
}

  &:hover, &:focus, &:active {
    background: linear-gradient(107.92deg, rgba(159, 77, 177, 0.8) -2.02%, rgba(124, 35, 237, 0.8) 112%), #000000;
    transform: translateY(-2px);
    color: white;
  }

  &:focus {
    outline: 3px solid ${primary};
    outline-offset: 2px;
  }

  @media (max-width: 800px) {
    font-size: ${mobileText.mainText}
  }
`

export const PrimaryButton = styled(Button)`
  background: linear-gradient(107.92deg, #9F4DB1 -2.02%, #7C23ED 112%), #FFFFFF;
  border: none;
  color: white;

  &:disabled {
    background: linear-gradient(107.92deg, rgba(159, 77, 177, 0.3) -2.02%, rgba(124, 35, 237, 0.3) 112%), #FFFFFF;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${primary};
  color: ${primary};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
  background-color: white;
  border: none;
  color: black;

  &:hover, &:focus, &:active {
    background: white;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset, rgba(23, 0, 102, 0.3) 0px 40px 80px, rgba(0, 0, 0, 0.3) 0px 10px 30px;
    color: black;
  }

  &:focus {
    outline: 3px solid white;
    outline-offset: 2px;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`