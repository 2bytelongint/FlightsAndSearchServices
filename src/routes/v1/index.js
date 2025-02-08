const express = require('express');



const cityController = require('../../controller/city-controller');
const flightController = require('../../controller/flight-controller')
const airportController = require('../../controller/airport-controller')

const {FlightMiddleware}  = require('../../middlewares/index')

const router = express.Router();

//city
router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id',cityController.get);
router.get('/city',cityController.getAll);
router.patch('/city/:id', cityController.update);

//flight
router.post('/flights',FlightMiddleware.validateCreateFlight, flightController.create);
router.get('/flights',flightController.getAll);


//aiport
router.post('/airports', airportController.create);

module.exports = router;