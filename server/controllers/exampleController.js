'use strict';

const getExampleData = (req, res) => {
    res.status('200').json('Example Data');
};

module.exports = {
    getExampleData,
};