const { Book } = require('../models');
const fetch = require('node-fetch')
const API_KEY = process.env.GOOGLE_API

const googleApi = (title) => {

    console.log('I got to the googleApi function')

    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {

        if (data.items.length > 0) {

            const bookData = {
                title: data.items[0].volumeInfo?.title,
                subtitle: data.items[0].volumeInfo?.subtitle,
                author: data.items[0].volumeInfo?.authors[0],
                publishedDate: data.items[0].volumeInfo?.publishedDate,
                pageCount: data.items[0].volumeInfo?.pageCount,
                description: data.items[0].volumeInfo?.description,
                image: data.items[0].volumeInfo?.imageLinks?.thumbnail
            }
            
            console.log(bookData)
            const book = Book.create( bookData )
    
            return book;
        }
    })
    .catch (err => {
        console.error(err)
    })
};

module.exports = { googleApi }