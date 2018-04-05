const Sequelize = require('sequelize');
const conn = require('../conn');
const avatar = require('cartoon-avatar');

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
      isEmail: {
        args: true,
        msg: "Must be a valid e-mail"
      },
      notEmpty: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(2,1),
    allowNull: false,
    validate: {
      min: {
        args: 0,
        msg: "GPA must be higher than 0"
      },
      max: {
        args: 4,
        msg: "GPA cannot be greater than 4.0"
      }
    }
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
    }
  }
  //may need a setter to get fullName to update
});

module.exports = Student;

// beforevalidate hook if no email, make one
//fix setter