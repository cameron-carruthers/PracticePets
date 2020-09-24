import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  position: absolute;
  width: 390px;
  height: 327px;
  left: 720px;
  top: 222px;
`

const PrimaryHeading = styled.h1`
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  width: 400px;
  color: white;
`

const SecondaryHeading = styled.h2`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  width: 300px;
  color: white;
  margin-bottom: 30px;
`

const Buttons = styled.div`
  display: flex;
`

const PrimaryColor = styled.span`
  color: #5fb14d;
`
const Intro = (props) => (
  <IntroContainer>
    <PrimaryHeading>Practice<PrimaryColor>Pets</PrimaryColor></PrimaryHeading>
    <SecondaryHeading>Practice your instrument to earn pets</SecondaryHeading>
    <Buttons>
      <button onClick={props.toggle}>Submit Practice</button>
      <button onClick={() => {props.shopForPets()}}>Purchase Pets</button>
    </Buttons>
  </IntroContainer>
)

export default Intro;