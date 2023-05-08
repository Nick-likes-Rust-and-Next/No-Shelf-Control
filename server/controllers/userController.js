const User = require('../models/User');

module.exports = {

    getSingleUser(req, res) {

        User.findOne( { _id: req.params.id } )
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err)) 
    },

    getUsers(req, res) {

        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    createUser(req, res) {

        User.create(req.body)
            .then((newUser) => res.json(newUser))
            .catch((err) => res.status(500).json(err));
    },

    updateUser(req, res) {
        
    },

    deleteUser(req, res) {

    },
}