import React, { useState, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import PracticeForm from './PracticeForm.jsx';
import PurchasePetsForm from './PurchasePetsForm.jsx';

const FormModal = (props) => {
  
  const { toggle, modal, studentData, retrieveStudentData } = props;

  const [name, setName] = useState('Choose a name')
  const [practiceAmount, setPractice] = useState('Select the amount of times you practiced this week');
  const [completedAssignments, setCompletedAssignments] = useState('Select Yes or No');
  const [comments, setComments] = useState('');
  const [pointsForCurrentStudent, setPointsForCurrentStudent] = useState(0);

  const submitPractice = (e) => {
    e.preventDefault();
    axios.put('/practice', {
      name,
      practiceAmount,
      completedAssignments,
      comments
    })
    .then((res) => {
      setName('Choose a name')
      setPractice('Select the amount of times you practiced this week')
      setCompletedAssignments('Select Yes or No')
      setComments('')
      retrieveStudentData();
      toggle();
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const buyPet = (e) => {
    e.preventDefault();
    axios.put('/buy-pet', {
      name,
      points: pointsForCurrentStudent - 5,
      pet: props.currentPet
    })
    .then((res) => {
      setName('Choose a name')
      setPointsForCurrentStudent(0);
      retrieveStudentData();
      toggle();
    })
    .catch((err) => {
      console.error(err);
    });
  }

  const closeForm = () => {
    setName('Choose a name');
    setPractice('Select the amount of times you practiced this week');
    setCompletedAssignments('Select Yes or No');
    setComments('');
    setPointsForCurrentStudent(0);
    toggle();
  }

  const findPointsForGivenName = (name) => {
    for (let i = 0; i < studentData.length; i++) {
      if (studentData[i].name === name) {
        setPointsForCurrentStudent(studentData[i].points);
        return;
      }
    }
    return null;
  }

  return (
      <Fragment>
        <Modal isOpen={modal} toggle={toggle} unmountOnClose={true}>
        {props.form === 'buyPets' ? <ModalHeader toggle={toggle}>Buy a New Pet</ModalHeader>
        : <ModalHeader toggle={toggle}>Submit Weekly Practice</ModalHeader>}
          <ModalBody>
            {props.form === 'buyPets' ? 
              <PurchasePetsForm 
                currentPet={props.currentPet}
                name={name}
                setName={setName}
                studentData={studentData}
                pointsForCurrentStudent={pointsForCurrentStudent}
                findPointsForGivenName={findPointsForGivenName}
              />
              :
              <PracticeForm 
              name={name}
              practiceAmount={practiceAmount}
              completedAssignments={completedAssignments}
              comments={comments}
              setName={setName}
              setPractice={setPractice}
              setCompletedAssignments={setCompletedAssignments}
              setComments={setComments}
              studentData={studentData}
            />}
          </ModalBody>
          <ModalFooter>
              {props.form === 'buyPets'
              ? pointsForCurrentStudent >= 5 ? <Button color="success" onClick={buyPet}>Buy Pet</Button>
              : null
              : <Button onClick={submitPractice} color="success">Submit</Button>}
              {' '}
              <Button onClick={closeForm}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
  );
}

export default FormModal;