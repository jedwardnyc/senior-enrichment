const Campus = require('./Campus');
const Student = require('./Student');

//relations will go here
Student.belongsTo(Campus);
Campus.belongsToMany(Student, {through: 'campusId'});
Campus.hasMany(Student, {foreignKey: 'campusId'});

module.exports = {
  Campus, 
  Student
};