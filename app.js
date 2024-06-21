const express = require('express');
const locationsController = require('./controllers/locations.controller.js');
const peopleController = require('./controllers/persons.controller.js');
const plansController = require('./controllers/plans.controller.js');
const machinesController = require('./controllers/machines.controller.js');
const eventsController = require('./controllers/special-events.controller.js');
const app = express();

app.get('/', (req, res) => res.send('Hello, world!'));
app.use('/locations', locationsController);
app.use('/machines', peopleController);
app.use('/persons', plansController);
app.use('/plans', machinesController);
app.use('/special-events', eventsController);
app.use('*', (req, res) => res.status(404).send({error: 'Sorry, no page found!'}));

module.exports = app;
