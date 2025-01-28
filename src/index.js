const express = require("express")
const bodyParser = require('body-parser')

const { City } = require('./models/index')

const { PORT } = require('./config/serverConfig')

const CityRepository = require('./repo/city-repo')

const setupAndStartServer = async() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended : true
    }))

    app.listen(PORT, async() => {
        console.log(`Server starts at ${PORT}`);

        const repo = new CityRepository();

        repo.createCity({ name : 'Chennai'})
        
    })
}

setupAndStartServer();