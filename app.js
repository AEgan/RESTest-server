var express = require('express');
var app = express();


//prob don't need most of these but whatever
// like I don't have views now so I don't need this
app.set('views', __dirname + '/views');
// or this
app.set('view engine', 'ejs');
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
// I don't even have a public folder lol
app.use(express.static(__dirname + '/public'));
app.use(express.errorHandler({ dumpExceptions: true, showStack: true}));
// but I'll keep these in there for now whatever


app.get('/', function(req, res) {
	res.send("yolo");
})

// 12345 because that's where my final project was and I'm used to it
app.listen(12345);
console.log("Listening on port 12345");