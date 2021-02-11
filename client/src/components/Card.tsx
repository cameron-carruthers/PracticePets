import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import { PrimaryButton } from './Buttons.ts';
// @ts-ignore
import { desktopText, mobileText } from '../utils/typography.ts';

const Background = styled.div`
  height: 375px;
  width: 230px;
  border-radius: 30px;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  overflow: hidden;
`
const Image = styled.img`
  height: 250px;
  text-align: center;
`

const WideImage = styled.img`
  width: 215px;
  margin: 20px auto;
  text-align: center;
`

const Price = styled.p`
  font-size: ${desktopText.mainText};
  font-weight: 600;
  margin: 10px;

  @media (max-width: 800) {
    font-size: ${mobileText.mainText};
  }
`
const Card = ({pet, price, orderPet}) => (
  <Background>
    {pet === 'turtle' || pet === 'frog' || pet === 'horse' || pet === 'monkey' || pet === 'koala'
    ? <WideImage src={require(`../assets/pets/${pet}.png`).default} alt={pet} /> 
    : <Image src={require(`../assets/pets/${pet}.png`).default} alt={pet} />}
    <Price>Price: {price} points</Price>
    <PrimaryButton modifiers="small" onClick={() => {orderPet(pet, price)}}>
      Buy This Pet
    </PrimaryButton>
  </Background>
)

export default Card;