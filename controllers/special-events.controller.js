const express = require('express');
const events = express.Router();
const eventsData = require('../models/special-event.model.js');

events.get('/special-events', (req, res) => res.send(eventsData));

module.exports = events;
