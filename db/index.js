const Sequelize = require('sequelize');

const connection = new Sequelize('review', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() =>console.log('Connected to MySQL Database'))
  .catch(error => console.error(error));

module.exports = connection;
