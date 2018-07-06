'use strict';

const exampleController = require('../controllers/exampleController.js');

module.exports = function(router) {
    router.get('*', function(req, res) {
        res.sendFile(`${process.env.PWD}/index.html`);
    });

    router.post('/api/getExampleData', exampleController.getExampleData);
};