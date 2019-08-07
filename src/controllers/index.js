const express = require('express');
const { get } = require('./home');
const { client, server } = require('./error');
const { getPhoto } = require('./data');
const { postContact } = require('./contact');

const router = express.Router();

router.get('/', get);
router.get('/photo', getPhoto);
router.post('/contact', postContact);

router.use('*', client);
router.use(server);

module.exports = router;
