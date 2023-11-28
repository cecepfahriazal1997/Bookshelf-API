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
    path: '/books/{bookId}',
    handler: getBooksByIdHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  }, {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;