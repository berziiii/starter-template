'use strict';

const app = require('./app.global.js');
const api = require('./app.api.js');
const ui = require('./app.ui.js');

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
// *** USED TO UPDATE NAVIGO ROUTES FROM VIEWS THAT ARE DYNAMICALLY BUILT *** //
app.updatePageLinks = () => {
  app.router.updatePageLinks();
  app.services.renderLoading();
};

const toggleNav = (route) => {
  $('.active-nav').removeClass('active-nav');
  $(`a[href='${route.path}']`).addClass('active-nav');
};

const generateView = function(route) {
  // Renders the view by Route Name
  let VIEW = require(`./${route.name.capitalize()}/${route.name}.events.js`);
  VIEW.renderTemplate();
  VIEW.registerEvents();
  // Highlights Navigation if present with correct option
  toggleNav(route);
  // *** Updates Page Links when new view is rendered *** //
  app.updatePageLinks();
};

const registerEventHandlers = () => {
  // Application Events
};

module.exports = {
 registerEventHandlers,
 generateView,
};


