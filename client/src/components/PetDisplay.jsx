import React from 'react';
import styled from 'styled-components';
import Scene from './Scene.svg';

const Title = styled.h2`
  text-align: center;
  margin: 20px auto;
`

const Image = styled.img`
  height: 160px;
  margin: 0px 15px;
`

const ImageBackground = styled.div`
  max-width: 850px;
  width: 822px;
  height: 538px;
  background: white;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 20px auto;
  margin-bottom: 75px;
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
const PetDisplay = ({pets, name}) => {

  const createScenes = () => {
    const scenes = [];

    while (pets.length > 0) {
      let nextSixPets = pets.slice(0,5);
      scenes.push(
        <ImageBackground>
          {nextSixPets.map((pet) => (
            <Image src={require(`../assets/pets/${pet}.png`).default} alt={pet} key={Math.random()}/>
          ))}
        </ImageBackground>
      )
      pets = pets.slice(5);
    }

    return (
      <ImageBackgroundContainer>
        {scenes}
      </ImageBackgroundContainer>
    )
  }

  return (
    <section>
      <Title>{name}'s Pets</Title>
      {createScenes()}
    </section> 
  )
};

export default PetDisplay;
