const { Seeder } = require('mongo-seeding');
const path = require('path');
const db = process.env.MONGO_URI || 'mongodb://localhost:27017/practice-pets';

const config = {
  database: db,
  dropDatabase: false,
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(path.resolve("./data"));

seeder
  .import(collections)
  .then(() => {
    console.log('success!');
  })
  .catch(err => {
    console.error('error');
  });