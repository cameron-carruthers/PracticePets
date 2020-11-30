const mongoose = require('mongoose');
const db = process.env.MONGO_URI || 'mongodb://localhost:27017/practice-pets';

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });

const { Schema } = mongoose;

const studentSchema = new Schema({
  name:  String,
  gender: String,
  points:   Number,
  pets: [String],
  weeklyPracticeData: [
    {
      dateSubmitted: { type: Date, default: Date.now },
      practiceAmount: Number,
      completedAssignments: Boolean,
      Comments: String
    }
  ]
});

const Student = mongoose.model('student', studentSchema);
Student.collection.createIndex({ name: 1 }, { unique: true });

module.exports = Student;