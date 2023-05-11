const { Book } = require('../models')
const API_KEY = process.env.GOOGLE_API

const googleApi = (title) => {

    fetch (`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {

        const bookData = {
            title: data.items[0].volumeInfo.title,
            subtitle: data.items[0].volumeInfo.subtitle,
            author: data.item[0].volumeInfo.authors[0],
            publishedDate: data.item[0].volumeInfo.publishedDate,
            pageCount: data.item[0].volumeInfo.pageCount,
            description: data.item[0].volumeInfo.description,
            image: data.item[0].volumeInfo.imageLinks.thumbnail
        }

        const book = Book.create({ bookData })

        return book;
    })
    .catch (err => {
        console.error(err)
    })
};

module.exports = { googleApi }