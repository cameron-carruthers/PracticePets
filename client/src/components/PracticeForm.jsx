import React from 'react';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import styled from 'styled-components';

const Explanation = styled.h3`
  font-size: 18px;
`

const PracticeForm = (props) => (
  <Form>
    <Explanation>How to earn points</Explanation>
    <p>- Earn 1 point for practicing 5 times</p>
    <p>- Earn 1 more point for practicing 7 times</p>
    <p>- Earn 1 point for practicing all assigned pieces at least once</p>
    <hr />
    <FormGroup>
      <Label for="name">Name</Label>
      <Input type="select" id="name" value={props.name} onChange={(e) => props.setName(e.target.value)}>
        <option value="">Choose a name</option>
        {props.studentData.map((student) => (

            <option value={student.name} key={student._id}>{student.name}</option>
          ))}
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="practiceAmount">How many times did you practice this week?</Label>
      <Input 
        type="select" 
        id="practiceAmount" 
        value={props.practiceAmount} 
        onChange={(e) => props.setPractice(e.target.value)}
      >
        <option value="">Select the amount of times you practiced this week</option>
        <option value={0}>0 times</option>
        <option value={1}>1 time</option>
        <option value={2}>2 times</option>
        <option value={3}>3 times</option>
        <option value={4}>4 times</option>
        <option value={5}>5 times</option>
        <option value={6}>6 times</option>
        <option value={7}>7 times</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="completedAssignments">Did you practice all assigned pieces?</Label>
      <Input 
        type="select" 
        id="completedAssignments" 
        value={props.completedAssignments} 
        onChange={(e) => props.setCompletedAssignments(e.target.value)}
      >
        <option value="">Select Yes or No</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="comments">Is there anything else you want Miss Cameron to know about your practice this week?</Label>
      <Input 
        type="textarea" 
        id="comments" 
        value={props.comments} 
        onChange={(e) => props.setComments(e.target.value)} 
      />
    </FormGroup>
    </Form>
);

export default PracticeForm;