const express = require('express');
const contactCntrl = require("../controller/contact/index")
const routes = express();

routes.get('/allContact', contactCntrl.allContact);

routes.post('/addContact', contactCntrl.addContact)




module.exports = routes;