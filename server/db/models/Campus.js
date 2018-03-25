const Sequelize = require('sequelize');
const conn = require('../conn');

const Campus = conn.define('campus', {
  name: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: './public/images/default_campus.jpg'
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Campus;