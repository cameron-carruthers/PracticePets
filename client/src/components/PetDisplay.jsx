import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  margin: 20px auto;
`

const Image = styled.img`
  height: 150px;
  margin: 0px 15px;
`

const ImageBackground = styled.div`
  max-width: 800px;
  width: 90%;
  height: 600px;
  background: black;
  margin: 20px auto;
  margin-bottom: 75px;
  text-align: center;
  background-image: url(${require('../assets/pets/scene.png').default});
  background-size: cover;
  border: 2px black solid;
  border-radius: 30px;
`

const ImageBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const PetDisplay = ({pets, name}) => {

  const createScenes = () => {
    const scenes = [];

    while (pets.length > 0) {
      let nextSixPets = pets.slice(0,6);
      scenes.push(
        <ImageBackground>
          {nextSixPets.map((pet) => (
            <Image src={require(`../assets/pets/${pet}.png`).default} alt={pet} key={Math.random()}/>
          ))}
        </ImageBackground>
      )
      pets = pets.slice(6);
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
