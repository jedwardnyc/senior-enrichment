const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/senior_enrichment', { logging: false });

module.exports = conn;