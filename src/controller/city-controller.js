const { CityService }  = require('../services/index');

const cityService = new CityService();

const create = async(req, res) => {

    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully created a city"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city",
            err : error
        })
        
    }

}

const destroy = async(req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully deleted a city"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete a city",
            err : error
        })
        
    }
}

const get = async(req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully fetched a city"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to get a city",
            err : error
        })
    }
}


const getAll = async(req, res) => {
    try {
        const cities = await cityService.getAllCity(req.query);
        return res.status(200).json({
            data : cities,
            success : true,
            message : "Successfully fetched city"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to get a city",
            err : error
        })
    }
}

const update = async(req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully updated a city"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update a city",
            err : error
        })
    }
}


module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
}