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
      isEmail: true,
      notEmpty: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(2,1),
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: avatar.generate_avatar()
  }
},  
{
  getterMethods: {
    fullName(){
      return `${this.firstName} ${this.lastName}`;
    },
  },
  setterMethods: {
    fullName: function (value){
      const names = value.split(' ');
      this.setDataValue('firstName', names[0]);
      this.setDataValue('lastName', names[1]);
    },
  }
});

module.exports = Student;