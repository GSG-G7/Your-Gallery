const fetch = require('node-fetch');
require('dotenv').config();

const input = 'cat';
const apiKey = process.env.API_KEY;
exports.getdata = (req, res) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}`;
  fetch(url).then(res => res.json()).then(data => res.send(data)).catch(err => console.log(err));
};
