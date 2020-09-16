import React from 'react';
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
const BuyPets = () => (
  <section>
    <Heading>Pets for Sale</Heading>
    <CardContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardContainer>
  </section>
);

export default BuyPets;