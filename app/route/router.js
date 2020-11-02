module.exports = function(app) {

    const currency = require('../controller/currency.controller.js');

    app.post('/api/customer', currency.create);

    // Retrieve all Cuurencies
    app.get('/api/currency', currency.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/customer/:currencyId', currency.findById);
    
}
