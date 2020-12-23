import React, { Fragment, useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from './Modal.jsx';
import PetDisplay from './PetDisplay.jsx';
import BuyPets from './BuyPets.jsx'
import StudentList from './StudentList.jsx'
import Hero from './Hero.jsx';
import { GlobalStyle } from '../utils';
import PurchasePetsForm from './PurchasePetsForm.jsx';
import PracticeForm from './PracticeForm.jsx';
import MobilePetDisplay from './MobilePetDisplay.jsx';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90vw;
  margin: 0 auto;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

const Container = styled.div`
  filter: ${props => props.blur ? 'blur(15px)' : 'none'};
  overflow-x:hidden;
`

const App = () => {

  const [studentData, setStudentData] = useState([]);
  const [currentPet, setCurrentPet] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [petsToView, setPetsToView] = useState(null);
  const [buyPets, setBuyPets] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState('practice');

  const shopForPets = () => {
    setBuyPets(true);
    window.scrollTo({
      top: 800,
      behavior: "smooth"
    });
  }

  const returnHome = () => {
    setBuyPets(false);
    window.scrollTo({
      top: 800,
      behavior: "smooth"
    });
  }
  
  const orderPet = (pet) => {
    setCurrentPet(pet);
    toggleModal('buyPets');
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
  }, [showModal]);

  const toggleModal = (form = 'practice') => {
    setForm(form);
    setShowModal(!showModal);
  }

  const displayModalContent = () => {
    const component = form === 'buyPets'
    ? 
      <PurchasePetsForm 
        studentData={studentData}
        toggleModal={toggleModal}
        retrieveStudentData={retrieveStudentData} 
        currentPet={currentPet}
      />  
    : 
    <PracticeForm 
      studentData={studentData}
      toggleModal={toggleModal}
      retrieveStudentData={retrieveStudentData}
    />
    return component;
  }

  return (
    <Container blur={showModal}>
      <GlobalStyle />
      <Hero toggleModal={toggleModal} returnHome={returnHome}/>
        {buyPets
        ? <BuyPets orderPet={orderPet} />
        : 
        <Wrapper>
          <MobilePetDisplay 
              pets={petsToView} 
              name={currentStudent} 
              toggleModal={toggleModal}
              shopForPets={shopForPets}
              />
          <PetDisplay 
            pets={petsToView} 
            name={currentStudent} 
            toggleModal={toggleModal}
            shopForPets={shopForPets}
            />
          <StudentList 
            studentData={studentData} 
            setBuyPets={setBuyPets} 
            setPetsToView={setPetsToView}
            setCurrentStudent={setCurrentStudent}
            />
        </Wrapper>}
        {showModal ? <Modal>
          {displayModalContent()}
        </Modal> : null}
    </Container>
  )
};

export default App;