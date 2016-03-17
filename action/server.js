var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/validate", function (request, response) {
	var targetId = request.query.id;
	var users = [ 'steave', 'bill', 'david' ]

	if (targetId == null)
		response.send("no id!");
	else 
		response.send( (users.indexOf(targetId) != -1)? "true":"false");
});

var server = app.listen(8081, function() {
	console.log("New connection!");
});
