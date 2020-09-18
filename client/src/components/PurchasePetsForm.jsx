import React from 'react';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import styled from 'styled-components';

const Image = styled.img`
  margin: 5px auto;
  text-align: center;

  @media (max-width: 600px) {
    width: 250px;
  }
`

const Alert = styled.span`
  color: red;
  font-weight: 600;
`
const Success = styled.p`
  color: green;
  font-weight: 600;
`

const PurchasePetsForm = (props) => (
  <div align="center">
    {<Image align="center" src={require(`../assets/pets/${props.currentPet}.png`).default} alt="avatar" /> || null}
    <Form align="left">
      <FormGroup>
        <Label align="left" for="name">Name</Label>
        <Input type="select" id="name" value={props.name} onChange={(e) => { 
          props.setName(e.target.value);
          props.findPointsForGivenName(e.target.value)
        }}>
          <option value="">Choose a name</option>
          {props.studentData.map((student) => (
              <option value={student.name} key={student._id}>{student.name}</option>
            ))}
        </Input>
      </FormGroup>
      {props.name !== 'Choose a name'? <p>You have <Alert>{props.pointsForCurrentStudent} points</Alert></p> : null}
      <p>This pet costs <Alert>5 points</Alert></p>
      {props.name === 'Choose a name' ? null :
      props.pointsForCurrentStudent >= 5 ? <Success>You have enough points to buy this pet!</Success> 
      : <Alert>You do have enough points to buy this pet!</Alert>}
    </Form>
  </div>
)

export default PurchasePetsForm;