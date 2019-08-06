const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Server is listenning to http://localhost:${app.get('port')}`);
});
