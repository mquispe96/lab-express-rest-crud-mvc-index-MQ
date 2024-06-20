const express = require('express');
const locationsController = require('./controllers/locations.controller.js');
const peopleController = require('./controllers/persons.controller.js');
const plansController = require('./controllers/plans.controller.js');
const machinesController = require('./controllers/machines.controller.js');
const eventsController = require('./controllers/special-events.controller.js');
const app = express();

app.get('/', (req, res) => res.send('Hello, world!'));
app.use('/', locationsController);
app.use('/', peopleController);
app.use('/', plansController);
app.use('/', machinesController);
app.use('/', eventsController);
app.use((req, res) => res.status(404).send('Sorry, no page found!'));

module.exports = app;
