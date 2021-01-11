import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Title from './Title.tsx';
// @ts-ignore
import Subtitle from './Subtitle.tsx';
import { TertiaryButton } from './Buttons';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  position: absolute;
  width: 36%;
  height: 33%;
  left: 52%;
  top: 21%;

  @media (max-width: 1025px) {
    left: 55%;
    top: 23%;
  }
`

const ButtonContainer = styled.div`
  margin-top: 20px;
`
const DesktopIntro = ({toggleModal}) => (
  <IntroContainer>
    <Title />
    <Subtitle />
    <ButtonContainer>
      <TertiaryButton modifiers="large" onClick={toggleModal}>Submit Practice</TertiaryButton>
    </ButtonContainer>
  </IntroContainer>
)

export default DesktopIntro;