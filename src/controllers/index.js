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
router.get('/data', getdata);
router.use('*', client);
router.use(server);

module.exports = router;
