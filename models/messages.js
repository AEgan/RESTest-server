/*
 * This is the model for messages, recently updated with mongo for persistent storage.
 * It has authors and messages
 */

var util = require('util');
var mongoClient = require("mongodb").MongoClient;
var server = "mongodb://localhost:27017/";
var collection = "rest";
var database = "messages";
var mongodb = require('mongodb');

// inserts a message to the array
function Message(author, message) {
	this.author = author;
	this.message = message;
	db.push(this);
}

/*
 * Throws an error
 */
var doError = function(error) {
	util.debug("ERROR: " + error);
	throw new Error(error);
}

/*
 * insert function, inserts with an author and a message
 */
exports.insert = function(author, message, callback) {
	mongoClient.connect(server+database, function(err, db) {
		if(err) {
			doError(err);
		}
		db.collection(collection).insert({'author': author, 'message': message}, {safe: true}, function(err, crsr) {
			if(err) {
				doError(err);
			}
			callback(crsr);
		});
	});
}

/*
 * lists all messages
 */
exports.list = function(callback) {
	mongoClient.connect(server+database, function(err, db) {
		if(err) {
			doError(err);
		}
		var crsr = db.collection(collection).find();
		crsr.toArray(function(err, docs) {
			if(err) {
				doError(err);
			}
			callback(docs);
		});
	});
}


// gets dat array
Message.list = function() {
	return JSON.stringify(db);
}

module.exports = Message;