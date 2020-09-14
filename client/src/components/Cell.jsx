import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 50px auto;
  }
`

const Image = styled.div`
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 10px;
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
    <Image image={props.image}></Image>
    <Student>
      <Name>{props.name}</Name>
      <div>{props.points} points</div>
      <div>{props.pets} pets</div>
    </Student>
  </Container>
);

export default Cell;