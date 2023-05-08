const router = require('express').Router();

const {
    getBooks,
    getSingleBook,
    addBook
} = require('../../controllers/bookController');

router.route('/').get(getBooks)

router.route('/:id')
    .get(getSingleBook)
    .post(addBook)

module.exports = router;