/**
 * Created by Adeyinka Micheal on 9th July 2019
 */

const bluebird = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = bluebird;

const config = require('../config/config');
const serviceLocator = require('../lib/service_locator');

const ProductService = require('../services/index');
const ProductController = require('../controllers/index');

const winston = require('winston');
require('winston-daily-rotate-file');

/**
 * Returns an instance of logger for the SE App
 */
serviceLocator.register('logger', () => {
  const fileTransport = new (winston.transports.DailyRotateFile)({
    filename: `${config.logging.file}se_app.log`,
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: process.env.ENV === 'development' ? 'debug' : 'info',
  });

  const consoleTransport = new (winston.transports.Console)({
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    json: false,
    colorize: true,
    level: process.env.ENV === 'development' ? 'debug' : 'info',
  });
  const transports = [consoleTransport];
  const winstonLogger = (winston.createLogger)({
    transports,
  });
  return winstonLogger;
});

/**
 * Returns a Mongo connection instance.
 */
serviceLocator.register('mongo', (servicelocator) => {
  const logger = servicelocator.get('logger');
  const connectionString = (!config.mongodb.username || !config.mongodb.password) ? `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.db}` : `mongodb://${config.mongodb.username}:${config.mongodb.password}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.db}`;
  mongoose.Promise = bluebird;
  console.log('connectionString', connectionString)
  const mongo = mongoose.connect(connectionString);
  mongo
    .then((data) => {
      logger.info('Mongo Connection Established');
    })
    .catch((err) => {
      logger.error('Unable to connect to MongoDB', err)
    })

  return mongo;
});

/**
 * Creates an instance of the Product Service
 */
serviceLocator.register('ProductService', (servicelocator) => {
  const logger = servicelocator.get('logger');
  const mongo = servicelocator.get('mongo');
  return new ProductService(logger, mongo);
});


/**
 * Creates an instance of the Product controller
 */
serviceLocator.register('ProductController', (servicelocator) => {
  const logger = servicelocator.get('logger');
  const ProductService = servicelocator.get('ProductService');

  return new ProductController(logger, ProductService);
});


module.exports = serviceLocator;
