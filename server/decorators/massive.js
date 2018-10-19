require('dotenv').config();
const massive = require('massive');

const connect = (process.env.MASSIVE_CONNECTION);

exports.decorate = (app) => {
  return massive(connect)
    .then(db => {
      app.set('massive', db);
      console.log(` ====== MASSIVE INITIALIZED`)
    })
    .then(() => Promise.resolve(app))
};