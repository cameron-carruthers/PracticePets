import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/avatars/heisenberg.png'

const Container = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 50px auto;
  }
`

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background: black;
`

const Student = styled.div`
  font-size: 14px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: 10px 0;
`

const Name = styled.div`
  font-size: 24px;
`

const Cell = (props) => (
  <Container>
    <Image src={require(`../assets/avatars/${props.image}`).default} alt="avatar" />
    <Student>
      <Name>{props.name}</Name>
      <div>{props.points} points</div>
      <div>{props.pets.length} pets</div>
    </Student>
  </Container>
);

export default Cell;