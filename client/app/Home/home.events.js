'use strict';

const app = require('../app.global.js');
const ui = require('./home.ui.js');
const ExampleComponent = require('./ExampleComponent/example.events.js');

const loadHomeComponents = () => {
    // Promise Chain
    Promise.all([
       ExampleComponent.loadExampleComponent(), 
    ])
    .then(() => {
        setTimeout(function() {
            app.services.hideLoading();
        }, 2000);
        // do something when all components are finished loading
    })
    .catch((err) => {
        console.error(err);
    });
}

const renderTemplate = () => {
    ui.renderHomeTemplate();
    loadHomeComponents();
};

const registerEvents = () => {
};

module.exports = {
    registerEvents,
    renderTemplate,
};