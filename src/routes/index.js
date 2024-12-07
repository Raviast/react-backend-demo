const express = require('express');
const projectRouter = require('./projectRoutes');
const clientRouter = require('./clientRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');
const routes = express.Router();

routes.use('/project', projectRouter)

routes.use('/client', clientRouter)

routes.use('/subscription', subscriptionRoutes)



module.exports = routes;