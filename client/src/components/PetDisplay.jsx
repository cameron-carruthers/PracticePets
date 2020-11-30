import React from 'react';
import styled from 'styled-components';
import Scene from './Scene.svg';
import {PrimaryButton, SecondaryButton} from './Buttons';

const Title = styled.h2`
  text-align: center;
  margin: 20px auto;
`

const Image = styled.img`
  height: 150px;
  margin: 0;
`

const ImageBackground = styled.div`
  max-width: 850px;
  width: 43rem;
  height: 28rem;
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
`

const ImageBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const PetDisplayWrapper = styled.section`
  margin-bottom: 100px;

  @media (max-width: 750px) {
    display: none;
  }
`
const PetDisplay = ({pets, name, toggleModal, shopForPets}) => {

  const createScenes = () => {
    const scenes = [];

    if (pets) {
      while (pets.length > 0) {
        let nextFivePets = pets.slice(0,5);
        scenes.push(
          <ImageBackground>
            {nextFivePets.map((pet) => (
              <Image src={require(`../assets/pets/${pet}.png`).default} alt={pet} key={Math.random()}/>
            ))}
          </ImageBackground>
        )
        pets = pets.slice(5);
      }
    } else {
      scenes.push(<ImageBackground />)
    }

    return (
      <ImageBackgroundContainer>
        {scenes}
        <ButtonContainer>
          <SecondaryButton modifiers="large" onClick={toggleModal}>Submit Practice</SecondaryButton>
          <PrimaryButton modifiers="large" onClick={shopForPets}>Purchase Pets</PrimaryButton>
        </ButtonContainer>
      </ImageBackgroundContainer>
    )
  }

  return (
    <PetDisplayWrapper>
      {name ? <Title>{name}'s Pets</Title> : <Title>Welcome to PracticePets</Title>}
      {createScenes()}
    </PetDisplayWrapper> 
  )
};

export default PetDisplay;
