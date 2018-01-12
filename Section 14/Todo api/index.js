const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var port = process.env.PORT || 3000;

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function() {
	console.log('App listening on port ' + port + '!');
});
