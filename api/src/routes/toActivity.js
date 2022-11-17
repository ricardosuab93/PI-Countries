const { Router } = require('express');
const router = Router();
const { postActivities, getActivities } = require('../controller/sendActivities.js');

router.post('/activities', postActivities);
router.get('/activities/', getActivities);

module.exports = router;