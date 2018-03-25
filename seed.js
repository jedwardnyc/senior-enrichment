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
    name: `${faker.address.state()} University`,
    imageURL: faker.image.imageUrl(440, 350, 'city', true),
    description: faker.lorem.paragraph(),
  },
  {
    name: `${faker.address.state()} State University`,
    imageURL: faker.image.imageUrl(440, 350, 'city', true),
    description: faker.lorem.paragraph(),
  },
  {
    name: `${faker.address.state()} State University`,
    imageURL: faker.image.imageUrl(440, 350, 'city', true),
    description: faker.lorem.paragraph(),
  },
  {
    name: `${faker.address.state()} University`,
    imageURL: faker.image.imageUrl(440, 350, 'city', true),
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
  );
};

const run = () => {
  console.log('syncing...');
  db.sync({force: true})
  .then(() => {
    console.log('seeding...');
    return seed();
  })
  .catch(err => console.log('!! Error while seeding !!', err))
}

run();
