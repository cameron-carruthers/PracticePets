import React from 'react';
import styled from 'styled-components';
import FemaleAvatar from './FemaleAvatar.svg';
import { desktopText, mobileText, primary } from '../utils';

const Container = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
  cursor: pointer;

  @media (max-width: 600px) {
    grid-template-columns: 50px auto;
  }

  &:focus {
  outline: 3px solid ${primary};
  outline-offset: 2px;
}
`

const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
`

const Student = styled.div`
  font-size: ${desktopText.mediumText};
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: 10px 0;

  @media (max-width: 600px) {
    font-size: ${mobileText.mediumText};
  }
`
const Name = styled.h4`
  margin: 0;
`

const Cell = ({setBuyPets, setPetsToView, setCurrentStudent, name, points, pets}) => (
  <Container tabIndex="0" onClick={() => {
    setBuyPets(false);
    setPetsToView(pets);
    setCurrentStudent(name);
    window.scrollTo({
      top: 800,
      behavior: "smooth"
    });
  }}>
    <ImageContainer>
      <img src={FemaleAvatar} alt="Female Avatar" />
    </ImageContainer>
    <Student>
      <Name>{name}</Name>
      <div>{points} points</div>
      {pets.length === 1
        ? <div>{pets.length} pet</div>
        : <div>{pets.length} pets</div>}
    </Student>
  </Container>
);

export default Cell;