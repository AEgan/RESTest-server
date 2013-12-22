
// my 'database', for now, is just an array lololol
var db = [];

// inserts a message to the array
function Message(author, message) {
	this.author = author;
	this.message = message;
	db.push(this);
}

// gets dat array
Message.list = function() {
	return JSON.stringify(db);
}

module.exports = Message;