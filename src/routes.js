const {
  getAllBooksHandler,
  getBooksByIdHandler,
  addBooksHandler,
  editBookByIdHandler,
  deleteBookByIdHandler
} = require('./handler');

const routes = [{
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksByIdHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  }, {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;