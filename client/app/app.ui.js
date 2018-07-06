'use strict';

const appTemplate = require('./app.component.hbs');

const renderApplicationTemplate = () => {
  $('main').html('');
  $('main').html(appTemplate());
};

module.exports = {
  renderApplicationTemplate,
};