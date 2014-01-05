var express = require('express');
var messages = require('./routes/messages_controller.js');
var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.logger('tiny'));	// Log requests to the console.log
app.use(express.static(__dirname + '/public'));
app.use(express.errorHandler({ dumpExceptions: true, showStack: true}));


app.get('/', function(req, res) {
	res.render('index');
});

app.get('/json', function(req, res) {
	var toSend = {
		message: "worked!"
	};
	res.send(toSend);
});

app.get('/list', messages.list);
app.put('/put', messages.put);
app.get('/find', messages.find);
app.delete('/destroy', messages.destroy);
app.post('/post', messages.post);

// 12345 because that's where my final project was and I'm used to it
app.listen(12345);
console.log("Listening on port 12345");