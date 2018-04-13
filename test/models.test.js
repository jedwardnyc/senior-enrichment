const expect = require("chai").expect;
const { db, Student, Campus } = require("../server/db/models");
const faker = require("faker");

const students = [
{
  firstName: "Jacob",
  lastName: "Rico",
  email: "jacob.rico@MHIacademy.edu",
  gpa: 4.0
},
{
  firstName: "James",
  lastName: "McCracken",
  email: "jmc@MHIacademy.edu",
  gpa: 2.0
},
{
  firstName: "Stanley",
  lastName: "Yelnats",
  email: "holesarebad@MHIacademy.edu",
  gpa: 0.1
}
];

const campuses = [
{
  name: `Africa Campus`,
  description: faker.lorem.paragraphs(3),
  addressLine1: "123 Fake Lane",
  addressLine2: "Visalia, CA 93292"
},
{
  name: `St Marcus Campus`,
  description: faker.lorem.paragraphs(3),
  addressLine1: "666 Super Fake St",
  addressLine2: "Maine, Ohio 12323"
},
{
  name: `Fake Campus`,
  description: faker.lorem.paragraphs(3),
  addressLine1: "1ABC Lane",
  addressLine2: "Ouah, MI 09459"
}
];

describe("Models", () => {

  describe("Student", () => {
    // seed and sync before tests
    before(() => {
      return db.sync({ force: true });
    });

    beforeEach(() => {
      return Promise.all(students.map(student => Student.create(student)));
    });

    describe("creatingStudents", () => {
      it("creates students on the db", () => {
        return Student.create(students[0]).then(student => {
          expect(student.fullName).to.equal("Jacob Rico");
        });
      });

      it("has a campusId on the student model", () => {
        return Student.create(students[1]).then(student => {
          expect(student.campusId).to.equal(null);
        });
      });

      it("can set a campus on a student", () => {
        const student = () => Student.create(students[1]);
        return Campus.create(campuses[0]).then(campus => {
          return student().then(student => {
            student.setCampus(campus);
            expect(student.campusId).to.equal(1);
          });
        });
      });
    });
  });

  describe("Campus", () => {
    // seed and sync before tests
    before(() => {
      return db.sync({ force: true });
    });

    beforeEach(() => {
      return Promise.all(campuses.map(campus => Campus.create(campus)));
    });

    it("creates a campus on the db", () => {
      return Campus.create(campuses[0]).then(campus => {
        expect(campus.name).to.equal("Africa Campus");
      });
    });
  
  });
});
  



