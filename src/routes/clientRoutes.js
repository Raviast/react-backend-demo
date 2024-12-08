const express = require('express');
const clientCntrl = require("../controller/client/index")
const routes = express();

routes.get('/allClient', clientCntrl.allClient);

routes.post('/addClient', clientCntrl.addClient)




module.exports = routes;