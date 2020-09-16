import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap'

const Background = styled.div`
  height: 375px;
  width: 225px;
  border-radius: 30px;
  box-shadow: 1px 1px 1px 1px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
`
const Image = styled.img`
  height: 250px;
  margin: 0px 15px;
  text-align: center;
`

const Price = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`
const Card = () => (
  <Background>
    <Image src={require('../assets/pets/bear.png').default} alt='bear' />
    <Price>Price: 5 points</Price>
    <Price>You have: 7 points</Price>
    <Button color="success" className="mt-2">Buy This Pet</Button>
  </Background>
)

export default Card;