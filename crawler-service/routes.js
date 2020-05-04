const express = require("express");
const routes = express.Router();

const CrawlerInstagram = require("./lib/crawler");

routes.get("/user", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  
  let userName = 'intertelecom.net.br';

  const crawler = new CrawlerInstagram();

  const data = await crawler
    .start(`${userName}`, 10)
    .catch(error => console.error("Error " + error));

  res.json(data.posts);
});

module.exports = routes;
