const auth = require('./auth.js');
const massive = require('./massive.js');

exports.decorate = (app) => {
  console.log('...starting suvi...')
  auth.decorate(app)
    .then(massive.decorate)
    .then((app) => {
      app.listen(3000 || process.env.PORT, function() {
        console.log(`suvi active on ${this.address().port}`)
      })
    })
}