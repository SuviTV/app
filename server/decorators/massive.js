const massive = require('massive');

const connect = (
'postgres://suvi_dev:\$uv1tvrul3s@suvi-dev.cag5x1h0pylh.us-east-2.rds.amazonaws.com:5432/suvidevelopers'
);

exports.decorate = (app) => {
  massive(connect)
    .then(db => {
      console.log(`
        --Postgres Connection Acquired--
      `)
      app.set('db', db);
    });
};