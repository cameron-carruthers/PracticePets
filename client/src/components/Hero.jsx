import React from 'react';
import styled from 'styled-components';
import Intro from './Intro.jsx';

const Heading = styled.div`
  background-image: url(${require('../assets/backgrounds/practice-pets-bkg.png').default});
  height: 850px;
  position: relative;
`
const Pet1 = styled.img`
  position: absolute;
  width: 202.9px;
  height: 287.48px;
  left: 201px;
  top: 78.13px;
`
const Pet2 = styled.img`
  position: absolute;
  width: 219.52px;
  height: 253.66px;
  left: 385.53px;
  top: 238.34px;
`

const Pet3 = styled.img`
  position: absolute;
  width: 195.9px;
  height: 318.63px;
  left: 507.1px;
  top: 63px;
`

const Hero = (props) => (
  <Heading>
    <Pet1 src={require('../assets/pets/hippo.png').default}/>
    <Pet2 src={require('../assets/pets/white-cat.png').default}/>
    <Pet3 src={require('../assets/pets/bunny.png').default}/>
    <Intro toggle={props.toggle} shopForPets={props.shopForPets}/>
  </Heading>
)

export default Hero;