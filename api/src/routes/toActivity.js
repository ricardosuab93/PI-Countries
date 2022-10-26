const { Router } = require('express');
const router = Router();
const { addActivity, getActivities } = require('../controller/sendActivities.js');

router.post('/addActivity', addActivity);
router.get('/activity', getActivities);

module.exports = router;