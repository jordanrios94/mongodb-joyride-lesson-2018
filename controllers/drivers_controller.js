const Driver = require('../models/driver');

const DEFAULT_DISTANCE = 200000;

const geoNear = (lng, lat, distance = DEFAULT_DISTANCE) => ({
  $geoNear: {
    near: {
      type: 'Point',
      coordinates: [parseFloat(lng), parseFloat(lat)]
    },
    spherical: true,
    distanceField: 'dist',
    maxDistance: distance
  }
});

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },
  index(req, res, next) {
    const { lng, lat } = req.query;

    Driver.aggregate([geoNear(lng, lat)])
      .then(drivers => res.send(drivers))
      .catch(next);
  },
  create(req, res, next) {
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(next);
  },
  edit(req, res, next) {
    const driverId = req.params.id;
    const driverProps = req.body;

    Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
      .then(() => Driver.findById({ _id: driverId }))
      .then(driver => res.send(driver))
      .catch(next);
  },
  delete(req, res, next) {
    const driverId = req.params.id;

    Driver.findByIdAndRemove({ _id: driverId })
      .then(driver => res.status(204).send(driver))
      .catch(next);
  }
};
