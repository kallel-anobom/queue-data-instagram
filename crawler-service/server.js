require('dotenv/config');

const express = require("express");

const PORT = process.env.SERVER_NODE;

const app = express();

app.use(require('./routes'));
app.use(express.json());

app.listen(PORT, () => {	console.log(`Listening on ${PORT}`); });
