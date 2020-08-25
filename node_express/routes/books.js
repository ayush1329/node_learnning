var express = require('express');
var router = express.Router();
const bookController = require('../controllers/book.controller')

/* GET book listing. */

router.route('/').get(function () {
  console.log('Base Route');
});


router.route('/id/:bookId').get(bookController.getBookById);

router.route('/delete/:bookId').delete(bookController.deleteBookById);

router.route('/update/:bookId').patch(bookController.updateBook);

router.route('/addBook').post(bookController.addBooks);

router.route('/getAllBooks').get(bookController.getAllbooks);

module.exports = router;
