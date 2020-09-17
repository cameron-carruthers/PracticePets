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
  width: 800px;
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
const PetDisplay = (props) => {
  
  return (
    <section>
      <Title>{props.name}'s Pets</Title>
      <ImageBackground>
        {props.pets.map((pet) => (
          <Image src={require(`../assets/pets/${pet}.png`).default} alt={pet} />
        ))}
      </ImageBackground>
    </section> 
  )
};

export default PetDisplay;
