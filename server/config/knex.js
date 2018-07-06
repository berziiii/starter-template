'use strict';

const proxy = require('../../proxy/config.js');

let configs = {
    knex_Development: {
            configName: 'knex_Development',
            client: 'mssql',
            port: proxy.selectedProxy.SERVER_PORT,
            connection: {
                host: '<% HOST URL %>',
                user: '<% USERNAME %>',
                password: '<% PASSWORD %>',
                database: '<% DATABASE %>',
            }
        }
};

const selectedConfig = configs.knex_Development;

module.exports = { selectedConfig };