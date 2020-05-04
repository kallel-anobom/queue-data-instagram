const Queue = require('bull');

const redisConfig = require('../../config/redis');
const SendDataPerfil = require('../jobs/SendDataPerfil');

const dataPerfil = new Queue(SendDataPerfil.key, redisConfig);

module.exports = dataPerfil;
