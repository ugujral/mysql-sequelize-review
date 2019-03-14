const Todo = require('./model');

const todoSeedData = [
  {
    name: 'Cook dinner',
  },
  {
    name: 'Feed cat',
  },
  {
    name: 'Watch TV',
  },
  {
    name: 'Sleep',
  },
];

Todo
  .sync({ force: false })
  .then(() => {
    Todo.bulkCreate(todoSeedData)
      .then(() => console.log('Todos seeded!'));
  });
