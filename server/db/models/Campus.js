const Sequelize = require('sequelize');
const conn = require('../conn');

const Campus = conn.define('campus', {
  name: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'A name is required'
      }
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: './public/images/default_campus.jpg'
  },
  description: {
    type: Sequelize.TEXT
  },
  addressLine1: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'A street address is required'
      }
    }
  },
  addressLine2: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'A city, state, and zip are required'
      }
    }
  }
});

module.exports = Campus;