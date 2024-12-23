const express = require('express');
const routes = express();

const subValidation = require("../validator/subReqValidator");
const subController = require('../controller/subscription');

routes.post('/create-sub', subValidation.creatSubValidator, subController.subscription)

routes.get('/all-sub', subController.getSubscription)

module.exports = routes;