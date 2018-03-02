var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 3000 })

wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('received: %s', message)
    })
    setInterval(
        () => ws.send(`${new Date()}`),
        1000
    )


    ws.onclose = function (event) {
        console.log('onclose called');
    };

    ws.onerror = function (error) {
        console.log('onerror called');
    };
})
