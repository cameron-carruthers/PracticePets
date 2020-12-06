import React from 'react';
import styled from 'styled-components';
import DesktopIntro from './DesktopIntro.jsx';

const Pet1 = styled.img`
  position: absolute;
  width: 14%;
  left: 14%;
  top: 7%;

  @media (max-width: 1100px) {
    width: 20%;
    left: 3%;
    top: 15%;
  }

  @media (max-height: 768px) and (min-width: 568px) {
    display: none;
  }

  @media (max-width: 600px) {
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
    top: 30%;
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
    left: 25%;
    top: 2%;
    width: 10%;
  }
`

const Pet3 = styled.img`
  position: absolute;
  width: 13%;
  left: 35%;
  top: 6%;

  @media (max-width: 1100px) {
    width: 20%;
    top: 15%;
    left: 30%;
  }

  @media (max-height: 768px) and (min-width: 568px) {
    display: block;
  }

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-height: 500px) {
    width: 10%;
    top: 0;
  }
`

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  @media (max-width: 560px) {
    display: none;
  }
`

const DesktopHero = ({toggleModal, returnHome}) => (
  <Container>
    <i tabindex="0" className="fas fa-home fa-2x" onClick={returnHome}></i>
    <Pet1 src={require('../assets/pets/hippo.png').default}/>
    <Pet2 src={require('../assets/pets/white-cat.png').default}/>
    <Pet3 src={require('../assets/pets/bunny.png').default}/>
    <DesktopIntro toggleModal={toggleModal}/>
  </Container>
);

export default DesktopHero;