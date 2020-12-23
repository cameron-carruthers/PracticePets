import React from 'react';
import styled from 'styled-components';
import Background from './Background.svg';
import MobileBackground from './MobileBackground.svg';
import DesktopHero from './DesktopHero.jsx';
import MobileHero from './MobileHero.jsx';

const Heading = styled.div`
  background: no-repeat;
  background-image: url(${Background});
  width: 100vw;
  height: 75vw;
  background-size: cover;
  position: relative;

  @media (max-width: 1025px) {
    background-image: url(${MobileBackground});
    width: 100vw;
    height: 200vw;
  }
`

const Hero = ({toggleModal, returnHome}) => (
  <Heading>
    <MobileHero toggleModal={toggleModal} returnHome={returnHome}/>
    <DesktopHero toggleModal={toggleModal} returnHome={returnHome}/>
  </Heading>
)

export default Hero;