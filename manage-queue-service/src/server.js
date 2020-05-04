require('dotenv/config');

const express = require('express');
const fetch = require('node-fetch');
const BullBoard = require('bull-board');

const Queue = require('./app/lib/Queue');
const app = express();

BullBoard.setQueues(Queue);

app.get('/', async (req, res) => {
  let response = await fetch(`http://localhost:3332/user`);
  let data = await response.json()

  await Queue.add({ data });

  res.send({ data });
});

app.use('/admin/queues', BullBoard.UI);


app.listen(3331, () => { console.log(`Listening on 3331`); });
