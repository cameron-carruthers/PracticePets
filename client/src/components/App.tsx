import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// @ts-ignore
import Modal from './Modal.tsx';
// @ts-ignore
import PetDisplay from './PetDisplay.tsx';
// @ts-ignore
import BuyPets from './BuyPets.tsx'
// @ts-ignore
import StudentList from './StudentList.tsx'
// @ts-ignore
import Hero from './Hero.tsx';
// @ts-ignore
import { GlobalStyle } from '../utils/index.ts';
// @ts-ignore
import PurchasePetsForm from './PurchasePetsForm.tsx';
// @ts-ignore
import PracticeForm from './PracticeForm.tsx';
// @ts-ignore
import MobilePetDisplay from './MobilePetDisplay.tsx';

interface ContainerProps {
  blur: string;
};

const PetDisplayWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  max-width: 1400px;
  margin: -200px auto;

  @media (max-width: 1025px) {
    flex-direction: column;
    margin: -675px auto;
  }

  @media (max-width: 600px) {
    margin: -240px auto;
  }
`

const BuyPetsWrapper = styled.section`
  margin: -50px auto;

  @media (max-width: 1025px) {
    margin: -500px auto;
  }

  @media (max-width: 600px) {
    margin: -240px auto;
  }
`

const Container = styled.div<ContainerProps>`
  filter: ${props => props.blur ? 'blur(15px)' : 'none'};
`

const Title = styled.h2`
  text-align: center;
  margin: 20px auto;
`

const BuyPetsHeading = styled.h2`
  text-align: center;
  margin: 20px auto;
`

const App = () => {

  const [studentData, setStudentData] = useState([]);
  const [currentPet, setCurrentPet] = useState<[name?: string, price?: number]>([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [petsToView, setPetsToView] = useState(null);
  const [buyPets, setBuyPets] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState('practice');

  const petDisplayRef = useRef<HTMLHeadingElement>(null);
  const buyPetsRef = useRef<HTMLHeadingElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const scrollToPetDisplay = () => {

    if (petDisplayRef.current) {
      petDisplayRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  useEffect(() => {
    if (buyPets && buyPetsRef.current) {
      buyPetsRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [buyPets])

  const shopForPets = () => {
    setBuyPets(true);
    setCurrentStudent(null);
  }

  const returnHome = () => {
    setBuyPets(false);
    if (homeRef.current) {
      homeRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  
  const orderPet = (pet: string, price: number) => {
    setCurrentPet([pet, price]);
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

  const toggleModal = (form: string = 'practice') => {
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
        returnHome={returnHome}
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
    // @ts-ignore
    <Container ref={homeRef} blur={showModal}>
      <GlobalStyle />
      <Hero toggleModal={toggleModal} returnHome={returnHome}/>
        {buyPets
        ? <BuyPetsWrapper>
            <BuyPetsHeading ref={buyPetsRef}>Pets for Sale</BuyPetsHeading>
            <BuyPets orderPet={orderPet} />
        </BuyPetsWrapper>
        : 
        <PetDisplayWrapper>
          <section>
            <Title ref={petDisplayRef}>{currentStudent ? `${currentStudent}'s Pets` : 'Welcome to PracticePets'}</Title>
            <MobilePetDisplay 
                pets={petsToView} 
                toggleModal={toggleModal}
                shopForPets={shopForPets}
                />
            <PetDisplay 
              pets={petsToView} 
              toggleModal={toggleModal}
              shopForPets={shopForPets}
              />
          </section>
          <StudentList 
            studentData={studentData} 
            setBuyPets={setBuyPets} 
            setPetsToView={setPetsToView}
            setCurrentStudent={setCurrentStudent}
            scrollToPetDisplay={scrollToPetDisplay}
            />
        </PetDisplayWrapper>}
        {showModal ? <Modal>
          {displayModalContent()}
        </Modal> : null}
    </Container>
  )
};

export default App;