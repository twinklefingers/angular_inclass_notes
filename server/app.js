var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({
    extended: true
}));

// Serve back static files
// app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/public', express.static(__dirname + '/public/'));

// Routes

// Handle index file separately
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
})


app.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('server is running on port', app.get('port'));

});

// Kris's code
// var server = app.listen(process.env.PORT || 3000, function () {
//   // this function is a callback
//   // using 'server' in here works b/c of Closure
//   console.log('Listening on port %d ', server.address().port);
// });
