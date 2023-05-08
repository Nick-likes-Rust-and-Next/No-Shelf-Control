const router = require('express').Router();
const userRoute = require('./userRoute');
const bookRoute = require('./bookRoute.js');

router.use('/books', bookRoute)
router.use('/user', userRoute);

module.exports = router;