const fs = require('fs');
const { join } = require('path');

exports.postContact = (req, res, next) => {
  fs.appendFile(join(__dirname, '..', 'models', 'contacts.json'), JSON.stringify(req.body), (err) => {
    if (err) next(err);
  });
  res.status(304).redirect('/');
};
