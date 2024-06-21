const express = require('express');
const locations = express.Router();
const locationsData = require('../models/location.model.js');
const personsData = require('../models/person.model.js');

locations.get('/', (req, res) => res.send(locationsData));
locations.get('/people', (req, res) => {
  const peopleByLocation = locationsData.map(location => {
    const {zip} = location;
    const members = personsData.filter(person => person.mainLocation === zip);
    return {...location, members};
  })
  res.send(peopleByLocation);
})

module.exports = locations;
