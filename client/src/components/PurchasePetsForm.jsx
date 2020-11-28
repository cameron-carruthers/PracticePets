import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {PrimaryButton, SecondaryButton} from './Buttons';
import {primaryTwo, secondaryTwo, neutral} from '../utils';

const Heading = styled.h4`
  margin: 0 auto;
  text-align: center;
`
const Image = styled.img`
  margin: 0 auto;
  text-align: center;

  @media (max-width: 600px) {
    width: 250px;
  }
`

const Text = styled.p`
  text-align: center;
  margin-bottom: 10px 0;
`

const Primary = styled.span`
  color: ${primaryTwo};
  font-weight: 700;
`
const Secondary = styled.span`
  color: ${secondaryTwo};
  font-weight: 700;
`

const Success = styled.p`
  color: ${secondaryTwo};
  font-weight: 700;
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
`

const Select = styled.select`
  color: ${props => props.inputColor || neutral};
`

const PurchasePetsForm = ({studentData, toggleModal, retrieveStudentData, currentPet}) => {

  const [name, setName] = useState('Choose a name')
  const [pointsForCurrentStudent, setPointsForCurrentStudent] = useState(0);
  const [inputColor, setInputColor] = useState(neutral);

  const submit = (e) => {
      e.preventDefault();
      axios.put('/buy-pet', {
        name,
        points: pointsForCurrentStudent - 5,
        pet: currentPet
      })
      .then((res) => {
        setName('Choose a name')
        setPointsForCurrentStudent(0);
        setInputColor(neutral);
        retrieveStudentData();
        toggleModal();
      })
      .catch((err) => {
        console.error(err);
      });
    }

    const cancel = () => {
      setName('Choose a name');
      setPointsForCurrentStudent(0);
      setInputColor(neutral);
      toggleModal();
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
    <form>
      <Heading>Buy a New Pet</Heading>
      {<Image align="center" src={require(`../assets/pets/${currentPet}.png`).default} alt="avatar" /> || null}
      <label for="name">
        Name
        <Select inputColor={inputColor} value={name} onChange={(e) => { 
          setName(e.target.value);
          setInputColor('black');
          findPointsForGivenName(e.target.value)
        }}>
          <option value="">Choose a name</option>
          {studentData.map(({name, _id}) => (
            <option value={name} key={_id}>{name}</option>
          ))}
        </Select>
      </label>
        <Text>This pet costs <Primary>5 points</Primary></Text>
        {name !== 'Choose a name'? <Text>You have <Secondary>{pointsForCurrentStudent} points</Secondary></Text> : null}
        {name === 'Choose a name' ? null :
        pointsForCurrentStudent >= 5 ? <Success>You have enough points to buy this pet!</Success> 
        : <Text>You need <Primary>{5 - pointsForCurrentStudent} more points</Primary> to buy this pet</Text>}
      <ButtonContainer>
        <SecondaryButton onClick={cancel}>Cancel</SecondaryButton>
        {pointsForCurrentStudent >= 5 ? <PrimaryButton onClick={submit}>Submit</PrimaryButton> : <PrimaryButton disabled onClick={submit}>Submit</PrimaryButton>}
      </ButtonContainer>
    </form>
  )
}

export default PurchasePetsForm;