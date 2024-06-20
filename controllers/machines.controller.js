const express = require('express');
const machines = express.Router();
const machinesData = require('../models/machine.model.js');

machines.get('/machines', (req, res) => res.send(machinesData));

module.exports = machines;
