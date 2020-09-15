const express = require('express');
const Student = require('./database');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('client/dist'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.put('/student',(req, res) => {
  const { practiceAmount, completedAssignments, comments, name } = req.body;
  const weeklyPracticeData = {
    practiceAmount,
    completedAssignments,
    comments,
  }
  let points = 0;

  if (req.body.practiceAmount >= 5) {
    points++;
  }
  if (req.body.practiceAmount === 7) {
    points++;
  }
  if (req.body.completedAssignments) {
    points++;
  }

  Student.updateOne({ name }, { $inc : { points }, $push: { weeklyPracticeData } })
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send();
    })
});

app.get('/students', (req, res) => {
  Student.find({})
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send()
    })
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});