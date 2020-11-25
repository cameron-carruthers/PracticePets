import React from 'react';
import styled from 'styled-components';
import Cell from './Cell.jsx';
import { desktopText, mobileText } from '../utils';

const Caption = styled.h3`
  text-align: center;
`

const SubCaption = styled.p`
  text-align: center;
  font-size: ${desktopText.mainText};
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: ${mobileText.mainText};
  }
`

const CellsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const StudentListContainer = styled.section`
  margin-left: 20px;
  margin-top: 100px;
`

const StudentList = (props) => (
  <StudentListContainer>
    <Caption>Students</Caption>
    <SubCaption>Whose pets do you want to see?</SubCaption>
    <CellsContainer>
      {props.studentData.map((student) => (
        <Cell
          key={Math.random()}
          name={student.name}
          image={student.image} 
          points={student.points}
          pets={student.pets}
          setView={props.setView}
          setPetsToView={props.setPetsToView}
          setCurrentStudent={props.setCurrentStudent}
        />
      ))}
    </CellsContainer>
  </StudentListContainer>
);

export default StudentList;