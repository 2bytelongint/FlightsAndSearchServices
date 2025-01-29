const { CityRepository } = require('../repo/index');

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the creation of city-service level");
            throw {error};
            
        }
    }

    async deleteCity(data){
        try {
            const res = await this.cityRepository.deleteCity(data);
            return res;
        } catch (error) {
            console.log("Something went wrong in the deletion of city-service level");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;

        } catch (error) {
            console.log("Something went wrong in the updation of city-service level");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
            
        } catch (error) {
            console.log("Something went wrong in the getter of city-service level");
            throw {error};
        }
    }

}


module.exports = CityService