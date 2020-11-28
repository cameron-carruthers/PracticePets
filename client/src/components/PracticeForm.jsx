import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {PrimaryButton, SecondaryButton} from './Buttons';
import {desktopText, mobileText} from '../utils';
import {neutral} from '../utils';

const Heading = styled.h4`
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SubHeading = styled.p`
  font-size: ${desktopText.introText};
  text-align: center;
  margin-bottom: 5px;

  @mobile (max-width: 600px) {
    font-size: ${mobileText.introText};
  }
`

const Points = styled.p`
  font-size: desktop.mainText;
  text-align: center;
  margin-bottom: 5px;

  @mobile (max-width: 600px) {
    font-size: mobileText.mainText;
  }
`

const Select = styled.select`
  color: ${props => props.inputColor || neutral};
`

const PracticeForm = ({studentData, toggleModal, retrieveStudentData}) => {

  const [name, setName] = useState(['Choose a name', neutral])
  const [practiceAmount, setPractice] = useState(['Select the amount of times you practiced this week', neutral]);
  const [completedAssignments, setCompletedAssignments] = useState(['Select Yes or No', neutral]);
  const [comments, setComments] = useState('');

  const submit = (e) => {
    e.preventDefault();
    axios.put('/practice', {
      name: name[0],
      practiceAmount: practiceAmount[0],
      completedAssignments: completedAssignments[0],
      comments
    })
    .then((res) => {
      setName(['Choose a name', neutral])
      setPractice(['Select the amount of times you practiced this week', neutral])
      setCompletedAssignments(['Select Yes or No', neutral])
      setComments('')
      retrieveStudentData();
      toggleModal();
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const cancel = (e) => {
    e.preventDefault();
    setName(['Choose a name', neutral])
    setPractice(['Select the amount of times you practiced this week', neutral])
    setCompletedAssignments(['Select Yes or No', neutral])
    setComments('');
    toggleModal();
  }

  return (

    <form>
      <Heading>Submit Weekly Practice</Heading>
      <SubHeading>How to Earn Points</SubHeading>
      <Points>Earn 1 point for practicing 5 times</Points>
      <Points>Earn 1 additional point for practicing 7 times</Points>
      <Points>Earn 1 point for practicing all assigned pieces</Points>
      <label for="name">
        Name
        <Select inputColor={name[1]} value={name[0]} onChange={(e) => setName([e.target.value, 'black'])}>
          <option value="">Choose a name</option>
          {studentData.map(({name, _id}) => (
            <option value={name} key={_id}>{name}</option>
          ))}
        </Select>
      </label>
      <label for="practiceAmount">
        How many times did you practice this week?
        <Select inputColor={practiceAmount[1]} value={practiceAmount[0]} onChange={(e) => setPractice([e.target.value, 'black'])}>
          <option value="">Select the amount of times you practiced this week</option>
          <option value={0}>0 times</option>
          <option value={1}>1 time</option>
          <option value={2}>2 times</option>
          <option value={3}>3 times</option>
          <option value={4}>4 times</option>
          <option value={5}>5 times</option>
          <option value={6}>6 times</option>
          <option value={7}>7 times</option>
        </Select>
      </label>
      <label for="completedAssignments">
        Did you practice all assigned pieces?
        <Select inputColor={completedAssignments[1]} value={completedAssignments[0]} onChange={(e) => setCompletedAssignments([e.target.value, 'black'])}>
          <option value="">Select Yes or No</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </Select>
      </label>
      <label for="comments">
        Is there anything else you want Miss Cameron to know about your practice this week?
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      </label>
      <ButtonContainer>
        <SecondaryButton onClick={cancel}>Cancel</SecondaryButton>
        <PrimaryButton onClick={submit}>Submit</PrimaryButton>
      </ButtonContainer>
    </form>
  )
};

export default PracticeForm;