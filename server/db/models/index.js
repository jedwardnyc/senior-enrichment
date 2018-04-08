const db = require('../index')
const Campus = require('./Campus');
const Student = require('./Student');

Student.belongsTo(Campus);

module.exports = {
  db,
  Campus, 
  Student
};