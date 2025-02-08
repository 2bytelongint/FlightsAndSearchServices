const {clientErrors} = require('../utils/error-codes')

const validateCreateFlight = (req, res, next) => {
    if(!req.body.flightNumber || !req.body.airplaneId || !req.body.departureAirportId ||
        !req.body.arrivalAirportId || !req.body.arrivalTime || !req.body.departureTime
        || !req.body.price
    ){
        return res.status(clientErrors.BAD_REQ).json({
            data : {},
            success : false,
            message : "Invalid request to create flight",
            err : "Missing mandatory credentials"
        });
    }

    next();
}

module.exports = {validateCreateFlight};