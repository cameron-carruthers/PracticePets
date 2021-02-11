import React, { useState } from 'react';
// @ts-ignore
import Card from './Card.tsx';
import styled from 'styled-components';
import { pets } from '../utils/pets';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1100px;
  margin: 10px auto;
`
const BuyPets = ({orderPet}) => {

  return (
    <>
      <CardContainer>
        {pets.map((pet) => (
          <Card pet={pet[0]} price={pet[1]} orderPet={orderPet} key={Math.random()}/>
        ))}
      </CardContainer>
    </> 
  )
};

export default BuyPets;