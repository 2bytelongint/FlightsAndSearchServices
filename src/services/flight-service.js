const { FlightRepository, AirplaneRepository} = require('../repo/index')
const {compareTime} = require('../utils/helper')
 
class FlightService {
    constructor(){
        this.flightRepository = new FlightRepository()
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime ,data.departureTime)){
                throw {error : "Arrival time cannot be less than Departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats : airplane.capacity}
            )
            return flight;
        } catch (error) {
            console.log("Something went wrong in the creation of flight-service level");
            throw {error};
        }
    }

    async getAllFlightData(data){
        try {
            const flights = await this.flightRepository.getAllFlight(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the getter of all flight-service level");
            throw {error};
        }
    }
}

module.exports = FlightService;