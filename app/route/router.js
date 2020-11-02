module.exports = function(app) {

    const currency = require('../controller/currency.controller.js');

    // Create a new Customer
    app.post('/api/customer', currency.create);

    // Retrieve all Customer
    app.get('/api/currency', currency.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/customer/:customerId', currency.findById);

  // Retrieve Customers Age
    app.get('/api/currency/age/:age', currency.findByAge);

    // Update a Customer with Id
    app.put('/api/customer/:customerId', currency.update);

    // Delete a Customer with Id
    app.delete('/api/customer/:customerId', currency.delete);
}
