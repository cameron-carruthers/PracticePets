import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// @ts-ignore
import { PrimaryButton, SecondaryButton } from './Buttons.ts';
// @ts-ignore
import { desktopText, mobileText } from '../utils/index.ts';
// @ts-ignore
import { neutral } from '../utils/index.ts';

interface SelectProps {
  inputColor: string;
};

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

  @media (max-width: 600px) {
    font-size: ${mobileText.introText};
  }

  @media (max-width: 400px) {
    display: none;
  }
`

const Points = styled.p`
  font-size: desktop.mainText;
  text-align: center;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    font-size: mobileText.mainText;
  }

  @media (max-width: 400px) {
    display: none;
  }
`

const Select = styled.select<SelectProps>`
  color: ${props => props.inputColor || neutral};
`

interface PracticeFormProps {
  studentData: []
  toggleModal: (form?: string) => void;
  retrieveStudentData: () => void;
}

const PracticeForm = ({studentData, toggleModal, retrieveStudentData}: PracticeFormProps) => {

  const [name, setName] = useState(['Choose a name', neutral])
  const [practiceAmount, setPractice] = useState(['Select the amount of times you practiced this week', neutral]);
  const [completedAssignments, setCompletedAssignments] = useState(['Select Yes or No', neutral]);
  const [comments, setComments] = useState('');

  const submit = (e: MouseEvent) => {
    e.preventDefault();
    axios.put('/practice', {
      name: name[0],
      practiceAmount: practiceAmount[0],
      completedAssignments: completedAssignments[0],
      comments
    })
    .then(() => {
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

  const cancel = (e: MouseEvent) => {
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
      <Points>1 point for practicing 3 times</Points>
      <Points>1 additional point for practicing 5 times</Points>
      <Points>1 point for practicing all assigned pieces</Points>
      <label htmlFor="name">
        Name
        <Select inputColor={name[1]} value={name[0]} onChange={(e) => setName([e.target.value, 'black'])}>
          <option value="">Choose a name</option>
          {studentData.map(({name, _id}) => (
            <option value={name} key={_id}>{name}</option>
          ))}
        </Select>
      </label>
      <label htmlFor="practiceAmount">
        How many times did you practice?
        <Select inputColor={practiceAmount[1]} value={practiceAmount[0]} onChange={(e) => setPractice([e.target.value, 'black'])}>
          <option value="">Select the amount of times</option>
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
      <label htmlFor="completedAssignments">
        Did you practice all assigned pieces?
        <Select inputColor={completedAssignments[1]} value={completedAssignments[0]} onChange={(e) => setCompletedAssignments([e.target.value, 'black'])}>
          <option value="">Select Yes or No</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </Select>
      </label>
      <label htmlFor="comments">
        Comments for Miss Cameron
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