const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { Book } = require("../models");
const { signToken } = require("../utils/auth");
const { googleApi } = require("../utils/googleApi");

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        books: async (parent, { title }) => {
            return await Book.find({
                title: { $regex: new RegExp(title, "is") },
            });
        },
        book: async (parent, { title }) => {
            try {
                let book = await Book.find({
                    title: { $regex: new RegExp(title, "is") },
                });

                if (book.length === 0) {
                    book = await googleApi(title);
                }
                console.log("the book already exists");
                return book;
            } catch (err) {
                console.error(err);
            }
        },
        booksByIds: async (parent, { ids }) => {
            const books = await Book.find({ _id: { $in: ids } });
            return books;
        },
    },

    Mutation: {
        addUser: async (
            parent,
            { username, email, password, firstName, lastName }
        ) => {
            const user = await User.create({
                username,
                email,
                password,
                firstName,
                lastName,
            });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError(
                    "No user found with this email address"
                );
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);

      return { token, user };
    },
    addBook: async (parent, {title, subtitle, author, publishedDate, pageCount, description, image}) => {

      const book = await Book.create({title, subtitle, author, publishedDate, pageCount, description, image});

      return book;
    },
    updateUser: async (parent, { id, bookID }) => {

      const updatedUser = await User.findByIdAndUpdate({ _id: id}, {$addToSet: { books: bookID } }, { new: true }).populate('books');

      return updatedUser;
    }
  },
};

module.exports = resolvers;
