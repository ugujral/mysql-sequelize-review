const Sequelize = require('sequelize');
const connection = require('./index');

const TodoModel = connection.define(
  'Todo', // name table
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
  },
  { timestamps: false }, // disable createdAt, updatedAt
);

connection
  .sync()
  .then(() => console.log('Synced with MySQL Database!'))
  .catch(error => console.error(error));

module.exports = TodoModel;
