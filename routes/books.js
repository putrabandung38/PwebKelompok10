const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');

//auth
const auth = require ('../configs/auth');
//script

router.get('/', auth.verifyToken, booksController.getAllBooks)
router.get('/:id', auth.verifyToken, booksController.detailBooks);
router.post('/', auth.verifyToken, booksController.createBooks);
router.put('/:id', auth.verifyToken, booksController.updateBooks)
router.delete('/:id', auth.verifyToken, booksController.deleteBooks)


module.exports = router;

