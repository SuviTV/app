const auth = require('./auth.js');
const massive = require('./massive.js');

function listen(app) {
  app.listen(3001 || process.env.PORT, function() {
    console.log(`suvi active on ${this.address().port}`);
  });
}

exports.decorate = (app) => {
  console.log('...starting suvi...');

  Promise.resolve(app)
    .then(auth.decorate)
    .then(massive.decorate)
    .then(listen);
}