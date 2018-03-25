const Sequelize = require('sequelize');
const conn = require('../conn');

const Student = conn.define('student', {
  firstName: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      isEmail: true,
      notEmpty: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(2,1)
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: './public/images/default_student.jpg'
  }
},  
{
  getterMethods: {
    fullName(){
      return `${this.firstName} ${this.lastName}`;
    },
  }
});

module.exports = Student;