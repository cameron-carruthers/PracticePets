import React from 'react';
import styled from 'styled-components';
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
    left: 45%;
  }

  @media (max-height: 768px) and (min-width: 568px) {
    top: 10%;
  }

  @media (max-height: 400px) {
    top: 0%;
    width: 20%;
  }
`

const PrimaryHeading = styled.h1`
  text-align: center;
  width: 400px;
  color: white;
`

const SecondaryHeading = styled.h3`
  text-align: center;
  width: 300px;
  color: white;
  margin-bottom: 30px;
`
const PrimaryColor = styled.span`
  color: #95CB89;
;
`

const ButtonContainer = styled.div`
  @media (max-height: 600px) {
    display: none;
  }
`
const Intro = ({toggleModal}) => (
  <IntroContainer>
    <PrimaryHeading>Practice<PrimaryColor>Pets</PrimaryColor></PrimaryHeading>
    <SecondaryHeading>Practice your instrument to earn pets</SecondaryHeading>
    <ButtonContainer>
      <TertiaryButton modifiers="large" onClick={toggleModal}>Submit Practice</TertiaryButton>
    </ButtonContainer>
  </IntroContainer>
)

export default Intro;