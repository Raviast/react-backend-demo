const express = require('express');
const projectRouter = require('./projectRoutes');
const clientRouter = require('./clientRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');
const contactRoutes = require('./contactRoutes');
const routes = express.Router();

routes.use('/project', projectRouter)

routes.use('/client', clientRouter)

routes.use('/subscription', subscriptionRoutes)

routes.use('/contact', contactRoutes)

module.exports = routes;