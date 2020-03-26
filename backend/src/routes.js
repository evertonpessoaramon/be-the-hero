const express = require('express');

const routes = express.Router();

const sessionController = require('./controllers/sessionController');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.list);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentController.list);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.list);

module.exports = routes;