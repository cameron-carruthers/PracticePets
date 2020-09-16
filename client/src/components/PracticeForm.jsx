import React from 'react';

const PracticeForm = () => {
  <FormGroup>
                <Label for="name">Name</Label>
                <Input type="select" id="name" value={name} onChange={(e) => setName(e.target.value)}>
                  {studentData.map((student) => (
                      <option value={student.name} key={student._id}>{student.name}</option>
                    ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="practiceAmount">How many times did you practice this week?</Label>
                <Input 
                  type="select" 
                  id="practiceAmount" 
                  value={practiceAmount} 
                  onChange={(e) => setPractice(e.target.value)}
                >
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
                  value={completedAssignments} 
                  onChange={(e) => setCompletedAssignments(e.target.value)}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="comments">Is there anything else you want Miss Cameron to know about your practice this week?</Label>
                <Input 
                  type="textarea" 
                  id="comments" 
                  value={comments} 
                  onChange={(e) => setComments(e.target.value)} 
                />
              </FormGroup>
};

export default PracticeForm;