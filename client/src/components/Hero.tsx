import React from 'react';
import styled from 'styled-components';
import Background from './Background.svg';
import MobileBackground from './MobileBackground.svg';
// @ts-ignore
import DesktopHero from './DesktopHero.tsx';
// @ts-ignore
import MobileHero from './MobileHero.tsx';

const Heading = styled.header`
  background: no-repeat;
  background-image: url(${Background});
  width: 100%;
  height: 75vw;
  background-size: cover;
  position: relative;

  @media (max-width: 1025px) {
    background-image: url(${MobileBackground});
    background-position: 0px -100px;
    width: 100vw;
    height: 200vw;
  }

  @media (max-width: 767px) {
    background-position: 0px 0px;
  }
`

const Hero = ({toggleModal, returnHome}) => (
  <Heading>
    <MobileHero toggleModal={toggleModal} returnHome={returnHome}/>
    <DesktopHero toggleModal={toggleModal} returnHome={returnHome}/>
  </Heading>
)

export default Hero;