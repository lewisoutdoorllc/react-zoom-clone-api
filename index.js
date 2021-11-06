const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.send("Hey there World");
})

io.on('connection', socket => {
    console.log('A User is connected');
    socket.on('user-connected', ({ roomId, userName}) => {
        console.log('A New User Has joined the room');
        console.log(roomId);
        console.log(userName);
    });
    // socket.on('chat message', msg => {
    //     console.log('message: ' + msg);
    //     io.emit('chat message', msg);
    // });
})

server.listen(port, () => {
    console.log(`Zoom Clone Server is listening on port ${port}`);
})

