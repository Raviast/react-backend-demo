const express = require('express');
const projectCntrl = require("../controller/project/index")
const routes = express();

routes.get('/allProject', projectCntrl.allProject);

routes.post('/addProject', projectCntrl.addProject)




module.exports = routes;