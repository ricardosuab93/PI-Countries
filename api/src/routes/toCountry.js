const { Router } = require ('express');
const router = Router();
const { getCountries, getCountryById, getCountryByName } = require('../controller/getCountries.js')

router.get('/countries', getCountries);
router.get('/countries/:id', getCountryById);
router.get('/country', getCountryByName);

module.exports = router;