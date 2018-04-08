const { Campus, Student, db }  = require('./server/db/models');

// randomizers for seeding
const faker = require('faker');
const avatar = require('cartoon-avatar');
const chance = require('chance')(12345);

const numOfStudents = 100;
const numOfCampuses = 10;

const doTimes = (n, func) => {
  const result = [];
  while (n--){
    result.push(func());
  };
  return result;
};

const randomCampus = () => {
  const streetAddress = chance.address({short_suffix: true});
  const city = faker.address.city();
  const cityStateZip = `${city}, ${chance.state({country: 'us'})} ${chance.zip()}`;
  return Campus.build({
    name: `${city} Campus`,
    description: faker.lorem.paragraphs(3),
    addressLine1: streetAddress,
    addressLine2: cityStateZip
  });   
};

const randomStudent = () => {
  const gender = chance.gender();
  const first_name = chance.first({ gender });
  const last_name = chance.last();
  return Student.build({
    firstName: first_name,
    lastName: last_name,
    email: `${first_name.toLowerCase()}.${last_name.toLowerCase()}@MHIacademy.edu`,
    gpa: chance.floating({min: 0.5, max: 4, fixed: 1}), 
    imageURL: avatar.generate_avatar({ gender }),
  });
};

const campuses = doTimes(numOfCampuses, randomCampus)
const students = doTimes(numOfStudents, randomStudent)

const seed = () => {
  return Promise.all(campuses.map(campus => campus.save()))
    .then(() => Promise.all(students.map(student => student.save()
      .then(student => {
        const randomCampus = chance.pickone(campuses);
        student.setCampus(randomCampus)
      })
    ))
  );
};

console.log('Syncing...');

db.sync({force: true})
  .then(() => {
    console.log('Seeding...');
    return seed();
  })
  .then(()=> console.log('Database has seeded!'))
  .catch(err => console.log('!! Error while seeding !!', err))
  .finally(() => {
    db.close();
    return null;
});
