const { where } = require('sequelize');
const { City } = require('../models/index')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class CityRepository {

    async createCity ({ name }){
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in the creation of city-repo level");
            throw {error};
            
        }
    }

    async deleteCity (cityId){
        try {
            await City.destroy({
                where: {
                    id : cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the deletion of city-repo level");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the getter of city-repo level");
            throw {error};
        }
    }

    async getAllCity(filter) {
        try {
            if(filter.name){
                const city = await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return city;
            }
            const city = await City.findAll();
            return city;
            
        } catch (error) {
            console.log("Something went wrong in the getter of city-repo level");
            throw {error};
        }
    }



    async updateCity(cityId, data){
        try {
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            
            return city; 

        } catch (error) {
            console.log("Something went wrong in the updation of city-repo level");
            throw {error};
        }
    }
}

module.exports = CityRepository