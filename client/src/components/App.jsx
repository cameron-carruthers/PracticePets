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
  const [studentData, setStudentData] = useState([]);
  const [currentPet, setCurrentPet] = useState(null);
  const [form, setForm] = useState(null);
  
  const toggle = (pet) => {
    console.log('toggle!', pet)
    if (typeof pet === 'string') {
      setCurrentPet(pet);
      setForm('buyPets');
    } else {
      setForm('submitPractice')
    }
    console.log('modal before', modal)
    setModal(!modal);
    console.log('modal after', modal)
  }

  const retrieveStudentData = () => {
    axios.get('/students')
    .then((res) => {
      console.log('res.data', res.data)
      setStudentData(res.data);
    }).catch((err) => {
      console.error(err);
    })
  }

  // const buyPets = (e) => {
  //   e.preventDefault();
  //   setView('buyPets');
  // }

  // const viewPets = (e) => {
  //   e.preventDefault();
  //   setView('viewPets');
  // }

  // const setHomeView = () => {
  //   setView('home');
  // }

  useEffect(() => {
    retrieveStudentData();
  }, [modal]);

  return (
    <Fragment>
      <Forms>
        <Button className="m-4" color="success" onClick={toggle}>Submit Practice</Button>
        <Button className="m-4" color="success" onClick={() => {setView('buyPets') }}>Purchase Pets</Button>
      </Forms>
      {view === 'buyPets' ? <BuyPets toggle={toggle}/> : null}
      {view === 'viewPets' ? <PetDisplay pets={studentData.pets}/> : null}
      <StudentList studentData={studentData} setView={setView}/>
      <FormModal 
        toggle={toggle} 
        modal={modal} 
        studentData={studentData} 
        retrieveStudentData={retrieveStudentData}
        currentPet={currentPet}
        view={view}
        setView={setView}
        setForm={setForm}
        form={form}
      />
    </Fragment>
  )
};

export default App;