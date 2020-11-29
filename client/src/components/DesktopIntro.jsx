import React from 'react';
import styled from 'styled-components';
import Title from './Title.jsx';
import Subtitle from './Subtitle.jsx';
import {TertiaryButton} from './Buttons';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  position: absolute;
  width: 29%;
  height: 33%;
  left: 52%;
  top: 21%;

  @media (max-width: 1100px) {
    left: 55%;
    top: 30%;
  }

  @media (max-width: 600px) {
    left: 45%;
    top: 21%;
  }

  @media (max-height: 768px) and (min-width: 568px) {
    top: 10%;
  }

  @media (max-height: 400px) {
    top: 0%;
    width: 20%;
  }

  @media (max-width: 560px){
    display: none;
  }
`

const ButtonContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-height: 500px) {
    display: none;
  }
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