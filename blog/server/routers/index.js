const router = require('express').Router();

router.use('/articles', require('./articles'));
router.use('/user', require('./user'));

module.exports = router;
