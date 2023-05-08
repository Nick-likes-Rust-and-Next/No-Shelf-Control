const router = require('express').Router();
const apiRoute = require('./api');

router.use('/api', apiRoute);

module.exports = router;