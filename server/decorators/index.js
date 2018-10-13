const auth = require('./auth.js');
const massive = require('./massive.js');

exports.decorate = (app) => {
  auth.decorate(app);
  massive.decorate(app);
}