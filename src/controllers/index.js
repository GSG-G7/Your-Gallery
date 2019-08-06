const express = require('express');
const {
  get,
} = require('./home');
const {
  client,
  server,
} = require('./error');
const {
  getdata,
} = require('./data');

const router = express.Router();

router.get('/', get);
// router.get('/data', post);
router.use('*', client);
router.use(server);

const input = 'cat';
const apiKey = process.env.API_KEY;
const url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}`;
getdata(url);
module.exports = router;
