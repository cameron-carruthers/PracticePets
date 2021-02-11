import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Cell from './Cell.tsx';
// @ts-ignore
import { desktopText, mobileText } from '../utils/index.ts';

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

  @media (max-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const StudentListContainer = styled.section`
  margin-left: 20px;
  margin-top: 100px;
`

interface StudentData {
  name: string;
  points: number;
  _id: string;
  gender: 'girl' | 'boy';
  image: string;
  pets: string[];
}

interface StudentListProps {
  studentData: StudentData[];
  setBuyPets: (buyPets: boolean) => void;
  setPetsToView: (pets: string[]) => void;
  setCurrentStudent: (student: StudentData) => void;
  scrollToPetDisplay: () => void;
}

const StudentList = ({studentData, setBuyPets, setPetsToView, setCurrentStudent, scrollToPetDisplay}: StudentListProps) => (
  <StudentListContainer>
    <Caption>Students</Caption>
    <SubCaption>Whose pets do you want to see?</SubCaption>
    <CellsContainer>
      {studentData.map(({name, gender, image, points, pets}) => (
        <Cell
          key={Math.random()}
          name={name}
          gender={gender}
          points={points}
          pets={pets}
          setBuyPets={setBuyPets}
          setPetsToView={setPetsToView}
          setCurrentStudent={setCurrentStudent}
          scrollToPetDisplay={scrollToPetDisplay}
        />
      ))}
    </CellsContainer>
  </StudentListContainer>
);

export default StudentList;