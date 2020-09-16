import React from 'react';
import styled from 'styled-components';
import Cell from './Cell.jsx';

const Caption = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

const CellsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const StudentList = (props) => (
  <section>
    <Caption>Students</Caption>
    <CellsContainer>
      {props.studentData.map((student) => (
        <Cell
          key={Math.random()}
          name={student.name}
          image={student.image} 
          points={student.points}
          pets={student.pets}
          setView={props.setView}
        />
      ))}
    </CellsContainer>
  </section>
);

export default StudentList;