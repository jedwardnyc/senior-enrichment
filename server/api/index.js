const router = require('express').Router()

//routes to individual files
router.use('/campuses', require('./campuses'));
router.use('/students', require('./students'));

module.exports = router;
