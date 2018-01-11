const express = require('express');
const bodyParser = require("body-parser");
const app = express();
var port = process.env.PORT || 3000;

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.redirect("/api/todos");
    // res.send("Hello from the root route");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function() {
	console.log('App listening on port ' + port + '!');
});
