var messages = require('../models/messages.js');

// list messages
exports.list = function(req, res) {
	messages.list(function(docs) {
		res.send(docs);
	});
}

// put message to create a new message
exports.put = function(req, res) {
	var author = req.query.author;
	var message = req.query.message;
	messages.insert(author, message, function(crsr) {
		res.send({message: "good"});
	});
}

