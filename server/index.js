const express = require('express');
const massive = require('./decorators/massive');

const app = express();

massive.decorate(app);

app.listen(3000 || process.env.PORT, function() {
	console.log(`activating suvi on ${this.address().port}...`);
});