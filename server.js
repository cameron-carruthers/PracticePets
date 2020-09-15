const express = require('express');
const Student = require('./database');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('client/dist'));

app.put('/student',(req, res) => {

  let points;
  if (req.body.practiceAmount >= 5) {
    points++;
  }
  if (req.body.practiceAmount === 7) {
    points++;
  }
  if (req.body.completedAssignments) {
    points++;
  }

  const { practiceAmount, completedAssignments, comments } = req.body;

  const weeklyPracticeData = {
    practiceAmount,
    completedAssignments,
    comments,
  }

  Student.update( {_id: req.body._id},
    { points, $push: { weeklyPracticeData } },
    done
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});