const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/books_kelompok10');

module.exports = sequelize;