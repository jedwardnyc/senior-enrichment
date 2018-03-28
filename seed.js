const db = require('./server/db');
const Student = require('./server/db/models/Student');
const Campus = require('./server/db/models/Campus');
const faker = require('faker');

const students = [
  { 
    firstName: "Jacob",
    lastName: "Rico",
    email: "jacob.rico@school.edu",
    gpa: 3.5
  },
  { 
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gpa: Number(((Math.random()*10)%2).toFixed(1))+2
  },
  { 
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gpa: Number(((Math.random()*10)%2).toFixed(1))+2
  },
  { 
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gpa: Number(((Math.random()*10)%2).toFixed(1))+2
  },
  { 
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gpa: Number(((Math.random()*10)%2).toFixed(1))+2
  },
]

const campuses = [
  {
    name: "Fresno State",
    description: "A simple school in Fresno"
  },
  {
    name: `${faker.address.state()} Campus`,
    description: faker.lorem.paragraph(),
  },
  {
    name: `${faker.address.state()} Campus`,
    description: faker.lorem.paragraph(),
  },
  {
    name: `${faker.address.state()} Campus`,
    description: faker.lorem.paragraph(),
  },
  {
    name: `${faker.address.state()} Campus`,
    description: faker.lorem.paragraph(),
  },

]

const seed = () => {
  Promise.all(students.map(student => 
    Student.create(student))
  )
  .then(() => 
    Promise.all(campuses.map(campus => 
      Campus.create(campus))
    )
  .then(() => db.close())
  );
};

const run = () => {
  console.log('Syncing...');
  db.sync({force: true})
  .then(() => {
    console.log('Seeding...');
    return seed()
  })
  .then(()=> console.log('Database has seeded!'))
  .catch(err => console.log('!! Error while seeding !!', err))
}

run();
