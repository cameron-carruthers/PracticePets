const express = require('express');
const path = require('path');
const Student = require('./config/db.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('client/dist'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/image.png', (req, res) => {
  const image = path.join(__dirname, 'image.png');
  res.sendFile(image);
})

app.put('/practice',(req, res) => {
  const { practiceAmount, completedAssignments, comments, name } = req.body;
  const weeklyPracticeData = {
    practiceAmount,
    completedAssignments,
    comments,
  }
  let points = 0;

  if (req.body.practiceAmount >= 5) {
    points+=1;
  }
  if (req.body.practiceAmount == 7) {
    points+=1;
  }
  if (req.body.completedAssignments === 'true') {
    points+=1;
  }

  Student.updateOne({ name }, { $inc : { points }, $push: { weeklyPracticeData } })
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send();
    })
});

app.put('/buy-pet',(req, res) => {
  const {  name, points, pet } = req.body;

  Student.updateOne({ name }, { points, $push: { pets: pet } })
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