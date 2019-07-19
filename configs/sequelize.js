const Sequelize = require('sequelize');
const sequelize = new Sequelize('books_kelompok10', 'root', 'password',{
	host :'localhost',
	dialect:'mysql'
});
module.exports = sequelize;
