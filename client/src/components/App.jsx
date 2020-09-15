import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap'
import studentData from '../../../data/student/studentData.json';
import Cell from './Cell.jsx';
import FormModal from './FormModal.jsx';

const Forms = styled.section`
  display: flex;
  justify-content: center;
`

const Caption = styled.h2`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
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

const App = () => {

  const [modal, setModal] = useState(false);
  
  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <Forms>
        <Button className="m-4" color="success" onClick={toggle}>Submit Practice</Button>
        <Button className="m-4" color="success">Purchase Pets</Button>
      </Forms>
      <section>
        <Caption>Students</Caption>
        <CellsContainer>
          {studentData.students.map((student) => (
            <Cell
              name={student.name}
              image={student.image} 
              points={student.points}
              pets={student.pets}
            />
          ))}
        </CellsContainer>
      </section>
      <FormModal toggle={toggle} modal={modal} />
    </Fragment>
  )
};

export default App;