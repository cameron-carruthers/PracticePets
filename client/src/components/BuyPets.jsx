import React, { useState } from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';

const Heading = styled.h2`
  text-align: center;
  margin: 20px auto;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 10px auto;
`
const BuyPets = () => {

  const [pets] = useState(["bear", "black-cat", "bunny", "chick", "dog", "frog", "giraffe", "hedgehog", "hippo", "horse", "koala", "lion", "monkey", "owl", "penguin", "pig", "sheep", "tiger", "turtle", "white-cat"]);

  return (
    <section>
      <Heading>Pets for Sale</Heading>
      <CardContainer>
        {pets.map((pet) => (
          <Card pet={pet} key={Math.random()}/>
        ))}
      </CardContainer>
    </section> 
  )
};

export default BuyPets;