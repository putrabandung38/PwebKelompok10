const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');

//auth
//script

router.get('/', booksController.getIndexBooks);
router.post('/add', booksController.postBooks)
router.put('/put:id', booksController.putBooks)
router.delete('/delete:id', booksController.deleteBooks)

module.exports = router;