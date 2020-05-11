const express = require('express');
const http = require('http');
const httpProxy = require('express-http-proxy');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const app = express();

const crawlerServiceProxy = httpProxy('crawler-service:3332');
const manageQueueServiceProxy = httpProxy('manage-queue-server:3331');

app.get('/user', (req, res, next) => {
  crawlerServiceProxy(req, res, next);
});

app.get('/data', (req, res, next) => {
  manageQueueServiceProxy(req, res, next);
});

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const server = http.createServer(app);
server.listen(4200);

