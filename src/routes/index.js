const express = require('express');
const projectRouter = require('./projectRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');
const routes = express.Router();

routes.use('/project', projectRouter)

routes.use('/subscription', subscriptionRoutes)





module.exports = routes;