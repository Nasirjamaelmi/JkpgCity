const Venue = require('../models/venue');

exports.getAllVenues = (req, res) => {
  Venue.findAll((err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching venues', error: err });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.getVenueById = (req, res) => {
  const id = req.params.id;
  Venue.findById(id, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching venue', error: err });
    } else if (results.length > 0) {
      res.status(200).json(results[0]);
    } else {
      res.status(404).json({ message: 'Venue not found' });
    }
  });
};

exports.createVenue = (req, res) => {
  const newVenue = req.body;
  Venue.create(newVenue, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error creating venue', error: err });
    } else {
      res.status(201).json({ message: 'Venue created', id: result.insertId });
    }
  });
};

exports.updateVenue = (req, res) => {
  const id = req.params.id;
  const venueData = req.body;
  Venue.update(id, venueData, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error updating venue', error: err });
    } else {
      res.status(200).json({ message: 'Venue updated', result });
    }
  });
};

exports.deleteVenue = (req, res) => {
  const id = req.params.id;
  Venue.delete(id, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error deleting venue', error: err });
    } else {
      res.status(200).json({ message: 'Venue deleted', result });
    }
  });
};
