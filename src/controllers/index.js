const express = require('express');
const { get } = require('./home');
const { client, server } = require('./error');
const { getPhoto } = require('./data');

const router = express.Router();

router.get('/', get);
router.get('/photo', getPhoto);

router.use('*', client);
router.use(server);

module.exports = router;
