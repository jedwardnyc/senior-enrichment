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
    defaultValue: './public/default_campus.jpeg'
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Campus;