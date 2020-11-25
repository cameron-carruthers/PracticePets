import React from 'react';
import styled from 'styled-components';
import Intro from './Intro.jsx';
import Background from './Background.svg';
import MobileBackground from './MobileBackground.svg';
import HorizontalBackground from './HorizontalBackground.svg';

const Heading = styled.div`
  background: no-repeat;
  background-image: url(${Background});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  position: relative;

  @media (max-width: 1100px) {
    background-image: url(${MobileBackground});
  }

  @media (max-height: 768px) and (min-width: 560px) {
    background-image: url(${HorizontalBackground});
  }
`
const Pet1 = styled.img`
  position: absolute;
  width: 14%;
  left: 14%;
  top: 7%;

  @media (max-height: 768px) and (min-width: 568px) {
    display: none;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`
const Pet2 = styled.img`
  position: absolute;
  width: 15%;
  left: 26%;
  top: 23%;

  @media (max-width: 1100px) {
    left: 20%;
    width: 20%;
    top: 15%;
  }

  @media (max-width: 900px) {
    top: 10%;
  }

  @media (max-width: 715px) {
    top: 20%;
    left: 56%;
    width: 40%;
  }

  @media (max-height: 768px) and (min-width: 568px) {
    left: 20%;
    top: 10%;
    width: 14%;
  }

  @media (max-height: 500px) {
    left: 23%;
    top: 10%;
    width: 13%;
  }

  @media (max-height: 350px) {
    left: 23%;
    top: 0;
    width: 10%;
  }
`

const Pet3 = styled.img`
  position: absolute;
  width: 13%;
  left: 35%;
  top: 6%;

  @media (max-height: 768px) and (min-width: 568px) {
    display: block;
  }

  @media (max-width: 1100px) {
    display: none;
  }

  @media (max-height: 500px) {
    width: 10%;
    top: 0;
  }
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