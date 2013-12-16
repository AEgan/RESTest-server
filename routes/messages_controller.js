var messages = require('../models/messages.js');

// list messages
exports.list = function(req, res) {
	res.send(messages.list());
}

// put message to create a new message
exports.put = function(req, res) {
	var message = new messages(req.query.author, req.query.message);
	res.send(message);
}

