const Book = require('../models/Book');

module.exports = {

    getBooks(req, res) {

        Book.find()
            .then((books) => res.json(books))
            .catch((err) => res.status(500).json(err))
    },

    getSingleBook(req, res) {

        Book.findOne( { _id: req.params.id } )
            .then((book) => res.json(book))
            .catch((err) => res.status(500).json(err))
    },

    addBook(req, res) {

    }
}