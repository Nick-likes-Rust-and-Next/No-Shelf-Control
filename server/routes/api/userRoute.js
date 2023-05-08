const router = require('express').Router();

const {
    getSingleUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;

