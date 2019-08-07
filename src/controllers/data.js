const fetch = require('node-fetch');
const { filterData } = require('./../logic');
require('dotenv').config();

const apiKey = process.env.API_KEY;
exports.getPhoto = (req, res, next) => {
  const { gif: input } = req.query;
  const url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}`;

  fetch(url).then(resGify => resGify.json())
    .then(res1 => filterData(res1.data))
    .then(result => res.render('home', { images: result, title: 'Your Gallery' }))
    .catch(err => next(err));
};
