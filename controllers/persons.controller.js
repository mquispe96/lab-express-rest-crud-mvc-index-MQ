const express = require('express');
const persons = express.Router();
const personsData = require('../models/person.model.js');

persons.get('/persons', (req, res) => res.send(personsData));

module.exports = persons;
