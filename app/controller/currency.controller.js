const db = require('../config/db.config.js');
const Currency = db.currencies;

// Post a Currency
exports.create = (req, res) => {
  // Save to PostgreSQL database
  Currency.create({
    name: req.body.name,
    age: req.body.age
  }).then(customer => {
    // Send created customer to client
    res.send(customer);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// FETCH all Currencys
exports.findAll = (req, res) => {
  Currency.findAll().then(customers => {
    // Send all customers to Client
    res.send(customers);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Find a Currency by Id
exports.findById = (req, res) => {
  Currency.findById(req.params.customerId).then(customer => {
    res.send(customer);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Find Currencys by Age
exports.findByAge = (req, res) => {
  Currency.findAll({
    where: {
      age: req.params.age
    }
  }).then(
    customers => {
      res.send(customers)
    }
  ).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// Update a Currency
exports.update = (req, res) => {
  var customer = req.body;
  const id = req.params.customerId;
  Currency.update( { name: req.body.name, age: req.body.age, active: req.body.active },
            { where: {id: req.params.customerId} }
           ).then(() => {
            res.status(200).send(customer);
           }).catch(err => {
            res.status(500).send("Error -> " + err);
           })
};

// Delete a Currency by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Currency.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('Currency has been deleted!');
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
};
