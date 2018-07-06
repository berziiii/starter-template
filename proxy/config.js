'use strict';

let config = {
    development_proxy: {
        CLIENT_URL: 'http://localhost:8080',
        CLIENT_PORT: 8080,
        SERVER_URL: 'http://localhost:3000',
        SERVER_PORT: 3000,
    },
    production_proxy: {
        CLIENT_URL: 'http://localhost:8000',
        CLIENT_PORT: 8000,
        SERVER_URL: 'http://localhost:8000',
        SERVER_PORT: 8000,
    }
};

let selectedProxy = config.development_proxy;

module.exports = { selectedProxy };
