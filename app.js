const express = require ("express");
const app = express();
const server = require("http").Server (app);

app.use (express.static (__dirname + '/public'));
app.use ('/libraries', express.static (__dirname + '/libraries'));
app.use ('/media', express.static (__dirname + '/media'));

app.get ('/', function (request, response) {
    response.sendFile ('public/index.html');
});

app.get ('/clicker', function (request, response) {
    response.sendFile (__dirname + '/public/clicker.html');
});

server.listen (process.env.PORT);
console.log ("Listening with port " + process.env.PORT);

const io = require ("socket.io")(server);
var numSockets = 0;
var mainSockets = [];

io.sockets.on ('connection', function (socket) {
    
    socket.on ('connection_main', function () {
        mainSockets[numSockets] = socket;
        numSockets++;
    });
    
    socket.on ('advance', function() {
        emitAll("advance");
    });
    
    socket.on ('play', function() {
        emitAll("play");
    });
    
});

function emitAll (command) {
    for (var i = 0; i < numSockets; i++) {
        mainSockets[i].emit (command);
    }
}