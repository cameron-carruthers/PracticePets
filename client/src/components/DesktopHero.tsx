import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import DesktopIntro from './DesktopIntro.tsx';

const Pet1 = styled.img`
  position: absolute;
  width: 14%;
  left: 14%;
  top: 7%;

  @media (max-width: 1025px) {
    width: 20%;
    left: 3%;
    top: 5%;
  }
`
const Pet2 = styled.img`
  position: absolute;
  width: 15%;
  left: 26%;
  top: 23%;

  @media (max-width: 1025px) {
    left: 20%;
    width: 20%;
    top: 15%;
  }
`

const Pet3 = styled.img`
  position: absolute;
  width: 13%;
  left: 35%;
  top: 6%;

  @media (max-width: 1025px) {
    width: 20%;
    top: 5%;
    left: 30%;
  }
`

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }
`

interface DesktopHeroProps {
  toggleModal: (form: string) => void;
  returnHome: () => void;
}

const DesktopHero = ({toggleModal, returnHome}: DesktopHeroProps) => (
  <Container>
    <i tabIndex={0} className="fas fa-home fa-2x" onClick={returnHome}></i>
    <Pet1 src={require('../assets/pets/hippo.png').default} alt="hippo"/>
    <Pet2 src={require('../assets/pets/white-cat.png').default} alt="white-cat"/>
    <Pet3 src={require('../assets/pets/bunny.png').default} alt="bunny"/>
    <DesktopIntro toggleModal={toggleModal}/>
  </Container>
);

export default DesktopHero;