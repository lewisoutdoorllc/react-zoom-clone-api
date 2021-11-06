const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.send("Hey there World");
})

server.listen(port, () => {
    console.log(`Zoom Clone Server is listening on port ${port}`);
})
