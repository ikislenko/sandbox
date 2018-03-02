const WebSocketServer = require("ws").Server;
const server = new WebSocketServer({ port: 3000 });

server.on('connection', function (conn) {
    conn.on('message', function (message) {
        console.log('received: %s', message)
        conn.send("Hello World!")
    })

    conn.on("close", () => {
        console.log("Connection closed!");
    })

    conn.on('error', event => console.log('errored', event));
})
