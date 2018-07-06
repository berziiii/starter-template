'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const knexConfig = require('./config/knex.js').selectedConfig;
const helmet = require("helmet");
/*
 * Config for Production and Development
 */
//adding for Strict-Transport-Security
app.use(helmet.hsts({
    maxAge: 7776000000,
    includeSubdomains: true
  }));
  //disable powered by header
app.disable('x-powered-by')
/*
 * Config for Production and Development
 */
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// // Locate the assets
app.use(express.static(path.join(__dirname, '../')));
app.use(router);

require('./router/routes.js')(router);

//Set API port
app.set('port', knexConfig.port);

//Listen on the port
app.listen(app.get('port'), function() {
    console.log(`Node App Started on Port ${knexConfig.port}`);
});