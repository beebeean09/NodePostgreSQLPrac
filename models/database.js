const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todos';

const client = pg.connect(connectionString);
// client.connect();

// const query = client.query(
//   'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
//   query.on('end', () => { client.end(); }
// );

// function createTodo(req, res, next) {
//   client.none('insert into items(text, complete)' +
//       'values(${text}, ${complete})',
//     req.body)
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Inserted one todo item'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }
//
// function getAllTodos(req, res, next) {
//   client.query('select * from items')
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved ALL todo items'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

// module.exports = {
//   createTodo: createTodo,
//   getAllTodos: getAllTodos
// };
