const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    publishedDate: {
      type: Number,
    },
    pageCount: {
      type: Number,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Book = model("Book", bookSchema);

module.exports = Book;