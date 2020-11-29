import React from 'react';
import styled from 'styled-components';
import Background from './Background.svg';
import MobileBackground from './MobileBackground.svg';
import HorizontalBackground from './HorizontalBackground.svg';
import DesktopHero from './DesktopHero.jsx';
import MobileHero from './MobileHero.jsx';

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

const Hero = ({toggleModal, returnHome}) => (
  <Heading>
    <MobileHero toggleModal={toggleModal} returnHome={returnHome}/>
    <DesktopHero toggleModal={toggleModal} returnHome={returnHome}/>
  </Heading>
)

export default Hero;