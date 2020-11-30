import React from 'react';
import styled from 'styled-components';
import {PrimaryButton, SecondaryButton} from './Buttons';
import Scene from './Scene.svg';

const ImageBackgroundContainer = styled.section`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    display: none;
  }
`

const ImageBackground = styled.div`
  width: 18rem;
  height: 15rem;
  background: white;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 20px auto;
  margin-bottom: 50px;
  text-align: center;
  background-image: url(${Scene});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center bottom;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 300px) {
    width: 15rem;
    height: 10rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h2`
  text-align: center;
  margin: 20px auto;
`
const Image = styled.img`
  height: 150px;
  margin: 0;
`

const MobilePetDisplay = ({pets, name, toggleModal, shopForPets}) => (
  <ImageBackgroundContainer>
    {name ? <Title>{name}'s Pets</Title> : <Title>Welcome to PracticePets</Title>}
    {pets ? pets.length > 0 ? pets.map((pet) => (
      <ImageBackground>
        <Image src={require(`../assets/pets/${pet}.png`).default} alt={pet} key={Math.random()}/>
      </ImageBackground>
    )) : <ImageBackground /> : <ImageBackground />}
    <ButtonContainer>
      <SecondaryButton modifiers="small" onClick={toggleModal}>Submit Practice</SecondaryButton>
      <PrimaryButton modifiers="small" onClick={shopForPets}>Purchase Pets</PrimaryButton>
    </ButtonContainer>
  </ImageBackgroundContainer>
)

export default MobilePetDisplay;