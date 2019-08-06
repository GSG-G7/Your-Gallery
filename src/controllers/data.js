const fetch = require('node-fetch');
require('dotenv').config();

const input = 'cat';
const apiKey = process.env.API_KEY;
const url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}`;
exports.getdata = () => {
  fetch(url).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err));
};
