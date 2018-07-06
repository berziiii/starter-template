'use strict';

const template = require('./home.component.hbs');

const renderHomeTemplate = () => {
    $('#appTemplate').html('');
    $('#appTemplate').html(template());
};

module.exports = {
    renderHomeTemplate,
};