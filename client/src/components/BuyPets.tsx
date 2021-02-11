import React from 'react';
// @ts-ignore
import Card from './Card.tsx';
import styled from 'styled-components';
// @ts-ignore
import { pets } from '../utils/pets.ts';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1100px;
  margin: 10px auto;
`

interface BuyPetsProps {
  orderPet: (pet: string, price: number) => void;
};

const BuyPets = ({orderPet}: BuyPetsProps) => {

  return (
    <>
      <CardContainer>
        {pets.map((pet: string) => (
          <Card pet={pet[0]} price={pet[1]} orderPet={orderPet} key={Math.random()}/>
        ))}
      </CardContainer>
    </> 
  )
};

export default BuyPets;