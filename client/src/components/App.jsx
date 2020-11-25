import React, { Fragment, useState, useEffect} from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap'
import axios from 'axios';
import FormModal from './FormModal.jsx';
import PetDisplay from './PetDisplay.jsx';
import BuyPets from './BuyPets.jsx'
import StudentList from './StudentList.jsx'
import Hero from './Hero.jsx';
import { GlobalStyle } from '../utils';
const App = () => {

  const [modal, setModal] = useState(false);
  const [view, setView] = useState(null);
  const [studentData, setStudentData] = useState([]);
  const [currentPet, setCurrentPet] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [petsToView, setPetsToView] = useState(null);
  const [form, setForm] = useState(null);

  const shopForPets = () => {
    setView('buyPets');
    window.scrollTo({
      top: 800,
      behavior: "smooth"
    });
  }
  
  const toggle = (pet) => {
    if (typeof pet === 'string') {
      setCurrentPet(pet);
      setForm('buyPets');
    } else {
      setForm('submitPractice')
    }
    setModal(!modal);
  }

  const retrieveStudentData = () => {
    axios.get('/students')
    .then((res) => {
      setStudentData(res.data);
    }).catch((err) => {
      console.error(err);
    })
  }

  useEffect(() => {
    retrieveStudentData();
  }, [modal]);

  return (
    <Fragment>
      <GlobalStyle />
      <Hero toggle={toggle} shopForPets={shopForPets}/>
      {view === 'buyPets' ? <BuyPets toggle={toggle} /> : null}
      {view === 'viewPets' ? <PetDisplay pets={petsToView} name={currentStudent}/> : null}
      <StudentList 
        studentData={studentData} 
        setView={setView} 
        setPetsToView={setPetsToView}
        setCurrentStudent={setCurrentStudent}
      />
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