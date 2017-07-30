const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

let users = {};
let rooms = {};
let counter = 0;

io.on('connection', (socket) => {

    socket.on('init', (msg) => {
        socket.id = counter++;

        if (!users[socket.id]) {
            users[socket.id] = socket;
        }

        if (!rooms[socket.id]) {
            rooms[socket.id] = msg;
        }

        socket.join(msg);
    });

    socket.on('loc', (data) => {

        for (var k in users) {
            io.of('/').emit('ploc', data);
            return;
        }
    });

    socket.on('disconnect', () => {
        for (var k in users) {
            if (users[k] === socket) {
                io.sockets.in(rooms[k]).emit('discon', k + ':' + "user disconnected");
            }
        }
    });
});

http.listen(8000, () => {
    console.log('server up on 8000');
})