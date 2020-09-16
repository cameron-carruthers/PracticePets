import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap'
import axios from 'axios';
import Cell from './Cell.jsx';
import FormModal from './FormModal.jsx';
import PetDisplay from './PetDisplay.jsx';
import BuyPets from './BuyPets.jsx'
import StudentList from './StudentList.jsx'

const Forms = styled.section`
  display: flex;
  justify-content: center;
`

const App = () => {

  const [modal, setModal] = useState(false);

  const [view, setView] = useState(null);
  
  const toggle = () => setModal(!modal);

  const [studentData, setStudentData] = useState([]);

  const retrieveStudentData = () => {
    axios.get('/students')
    .then((res) => {
      setStudentData(res.data);
    }).catch((err) => {
      console.error(err);
    })
  }

  const buyPets = (e) => {
    e.preventDefault();
    setView('buyPets');
  }

  const viewPets = (e) => {
    e.preventDefault();
    setView('viewPets');
  }

  useEffect(() => {
    retrieveStudentData();
  }, []);

  return (
    <Fragment>
      <Forms>
        <Button className="m-4" color="success" onClick={toggle}>Submit Practice</Button>
        <Button className="m-4" color="success" onClick={buyPets}>Purchase Pets</Button>
      </Forms>
      {view === 'buyPets' ? <BuyPets /> : null}
      {view === 'viewPets' ? <PetDisplay pets={studentData.pets}/> : null}
      <StudentList studentData={studentData} viewPets={viewPets}/>
      <FormModal 
        toggle={toggle} 
        modal={modal} 
        studentData={studentData} 
        retrieveStudentData={retrieveStudentData}
      />
    </Fragment>
  )
};

export default App;