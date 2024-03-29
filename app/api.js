const dotenv = require('dotenv');

dotenv.config();

// Require exported modules
const config = require('./config/config');
const routes = require('./routes/product')


const multer = require('multer');

// service locator via dependency injection
const serviceLocator = require('../app/config/di');

// Connect to SQL
serviceLocator.get('mongo');

// Get the logger service injected
const logger = serviceLocator.get('logger');

const restify = require('restify');
const plugins = require('restify-plugins');
const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['Content-Type', 'authentication', 'authorization', 'Accept'],
  exposeHeaders: ['Content-Type', 'authentication', 'authorization', 'Accept'],
})

//set request handling and parsing


restify.defaultResponseHeaders = function(data) {
    this.header(server, 'Authorization');
    console.log('the datatatat', data)
};

const server = restify.createServer({
    name: config.app_name,
    versions: ['1.0.0'],
});


server.pre(cors.preflight);
server.use(cors.actual);

// set API versioning and allow trailing slashes
server.pre(restify.pre.sanitizePath());


// set request handling and parsing
server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(plugins.bodyParser());

// setup Routing and Error Event Handling
routes(server, serviceLocator);

server.listen(config.api_server.port, () => {
  logger.info(`${server.name} listening at ${server.url}`);
});