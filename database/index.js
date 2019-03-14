const Sequelize = require('sequelize');

console.log('hello from index.js');

const connection = new Sequelize('dbreview', 'root', 'yongsoolee', {
  host: 'localhost',
  dialect: 'mysql',
});

connection
  .authenticate()
  .then(() => console.log('Connected to MySQL Database!'))
  .catch(error => console.error(error));

module.exports = connection;
