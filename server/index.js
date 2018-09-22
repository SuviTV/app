const express = require('express');

const app = express();

app.listen(3000 || process.env.PORT, function() {
	console.log(`suvi active on ${this.address().port}`);
});
