require('dotenv/config');

const Queue = require('./app/lib/Queue');
const SendDataPerfil = require('./app/jobs/SendDataPerfil');

Queue.process(SendDataPerfil.handle);