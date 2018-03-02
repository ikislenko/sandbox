require("./styles/main.less");
let el = document.querySelector(".text");
let ws = new WebSocket('ws://localhost:3000');
let Log = require("./Log");
let log = new Log;
// event emmited when connected
ws.onopen = function () {
	log.write("websocket is connected ...");
	// sending a send event to websocket server
	ws.send('connected');
}
// event emmited when receiving message 
ws.onmessage = function (ev) {
	el.innerText = ev.data;
	log.write(ev.data);
}