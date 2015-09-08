var express = require('express');
var app = express();
var server = require('http').createServer(app); // server instance
var io = require('socket.io')(server);

var d = require('debug')('app');

// parse for application/json
app.use(require('body-parser').json());

// serve static files
app.use(require('ecstatic')(__dirname + '/public'));

// bind for routes
app.use('/api/v1', require('./routes'));


// catch 404
app.use(function(req, res) {
  res.status(404).json({error: '404 not found'});
});

// write socket.io codes
io.on('connect', function(client) {
  d('connected');
});

server.listen(8080, function(err) {
  if (err) {
    return d(err);
  }

  d('server started at 3000');
});