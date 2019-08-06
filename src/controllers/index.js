const express = require('express');
const { get } = require('./home');
const { client, server } = require('./error');

const router = express.Router();

router.get('/', get);
router.use('*', client);
router.use(server);

module.exports = router;
