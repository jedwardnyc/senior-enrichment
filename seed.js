const db = require('./server/db');
const Student = require('./server/db/models/Student');
const Campus = require('./server/db/models/Campus');
const faker = require('faker');
const avatar = require('cartoon-avatar');

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
    gpa: Number(((Math.random()*10)%2).toFixed(1))+2,
    imageURL: avatar.generate_avatar()
  },
  { 
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gpa: Number(((Math.random()*10)%2).toFixed(1))+2,
    imageURL: avatar.generate_avatar()
  },
  { 
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gpa: Number(((Math.random()*10)%2).toFixed(1))+2,
    imageURL: avatar.generate_avatar()
  },
  { 
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gpa: Number(((Math.random()*10)%2).toFixed(1))+2,
    imageURL: avatar.generate_avatar()
  },
]

const campuses = [
  {
    name: "Fresno Campus",
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
  Promise.all(campuses.map(campus => 
    Campus.create(campus))
  )
  .then(() => Promise.all(students.map(student => 
      Student.create(student)
      .then(student => student.setCampus(1))
    ))
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
