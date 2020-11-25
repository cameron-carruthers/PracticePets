import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/avatars/heisenberg.png'
import FemaleAvatar from './FemaleAvatar.svg';
import { desktopText, mobileText } from '../utils';

const Container = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
  cursor: pointer;

  @media (max-width: 600px) {
    grid-template-columns: 50px auto;
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
  margin-bottom: 0;
`

const Cell = (props) => (
  <Container onClick={() => {
    props.setView('viewPets');
    props.setPetsToView(props.pets);
    props.setCurrentStudent(props.name);
    window.scrollTo({
      top: 800,
      behavior: "smooth"
    });
  }}>
    <ImageContainer>
      <img src={FemaleAvatar} alt="Female Avatar" />
    </ImageContainer>
    <Student>
      <Name>{props.name}</Name>
      <div>{props.points} points</div>
      {props.pets.length === 1
        ? <div>{props.pets.length} pet</div>
        : <div>{props.pets.length} pets</div>}
    </Student>
  </Container>
);

export default Cell;