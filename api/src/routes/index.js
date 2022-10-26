const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoutes = require('./toCountry.js');
const activityRoutes = require('./toActivity.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', countryRoutes);
router.use('/', activityRoutes);

module.exports = router;
