import React from 'react';
import styled from 'styled-components';

const Caption = styled.h2`
  text-align: center;
  margin: 20px auto;
`

const Image = styled.img`
  height: 150px;
  margin: 0px 15px;
`

const ImageBackground = styled.section`
  width: 800px;
  height: 600px;
  background: black;
  margin: 20px auto;
  margin-bottom: 75px;
  text-align: center;
`
const PetDisplay = (props) => (
  <div>
    <Caption>Cameron's Pets</Caption>
    <ImageBackground>
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
      <Image src={require('../assets/pets/bear.png').default} alt='bear' />
    </ImageBackground>
  </div>
);

export default PetDisplay;

// const PetDisplay = (props) => (
//   <section>
//     {props.pets.map((pet) => {
//       <Image src={require(`../assets/pets/${pet.image}`).default} alt={pet.image} />
//     })}
//   </section>
// );
