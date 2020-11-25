import React from 'react';
import styled from 'styled-components';
import {PrimaryButton} from './Buttons';
import {desktopText, mobileText} from '../utils/typography';

const Background = styled.div`
  height: 375px;
  width: 230px;
  border-radius: 30px;
  box-shadow: 1px 1px 1px 1px;
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
  margin: 0px 15px;
  text-align: center;
`

const WideImage = styled.img`
  width: 225px;
  margin: 20px 15px;
  text-align: center;
`

const Price = styled.p`
  font-size: ${desktopText.mainText};
  font-weight: 600;
  margin: 0;

  @media (max-width: 800) {
    font-size: ${mobileText.mainText};
  }
`
const Card = (props) => (
  <Background>
    {props.pet === 'turtle' || props.pet === 'frog' || props.pet === 'horse' || props.pet === 'monkey'
    ? <WideImage src={require(`../assets/pets/${props.pet}.png`).default} alt={props.pet} /> 
    : <Image src={require(`../assets/pets/${props.pet}.png`).default} alt={props.pet} />}
    <Price>Price: 5 points</Price>
    <PrimaryButton modifiers="small" onClick={() => { props.toggle(props.pet) }}>
      Buy This Pet
    </PrimaryButton>
  </Background>
)

export default Card;