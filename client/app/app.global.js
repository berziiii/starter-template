'use strict';

module.exports = {
    hostUrl: require('../../proxy/config').selectedProxy.CLIENT_URL,
    apiUrl: require('../../proxy/config').selectedProxy.SERVER_URL,
    services: require('../services/app.services').SERVICES,
    router: {},
};