const { Campus, Student, db }  = require('./server/db/models/');

// randomizers for seeding
const faker = require('faker');
const avatar = require('cartoon-avatar');
const chance = require('chance')(12345);

const numOfStudents = 100;
const numOfCampuses = 20;

const doTimes = (n, func) => {
  const result = [];
  while (n){
    result.push(func());
    n--;
  };
  return result;
}

const randomCampus = (generatedStudents) => {
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

const randomStudent = (campuses) => {
  const campus = chance.pickone(campuses)
  console.log(campus)
  const gender = chance.gender();
  return Student.build({
    firstName: chance.first({ gender }),
    lastName: chance.last({ gender }),
    email: chance.email({ domain: 'mhiacademy.com'}),
    gpa: Number(((Math.random()*10)%2).toFixed(1))+2,
    imageURL: avatar.generate_avatar({ gender }),
    campusId: campus.id
  })
};

const campuses = doTimes(numOfCampuses, randomCampus)
const students = doTimes(numOfStudents, () => randomStudent(campuses))

const seed = () => {
  return Promise.all(campuses.map(campus => campus.save()))
    .then(() => Promise.all(students.map(student => student.save()
      .then(student => {
        const randomCampus = Math.floor(Math.random()*campuses.length)+1
        student.setCampus(randomCampus)
      })
    ))
  )
}

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


