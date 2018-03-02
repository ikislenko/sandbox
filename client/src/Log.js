let Utils = require('./Utils');
let $ = new Utils;

module.exports = class Log {
    constructor() {

    }

    write(msg, type) {
        let currDateTime = new Date();
        switch (type) {
            case "ERR":
                console.log(`${$.getDate(currDateTime)} - ERROR: ${msg}`);
                break;
            case "WARN":
                console.log(`${$.getDate(currDateTime)} - WARNING: ${msg}`);
                break;

            default:
                console.log(`${$.getDate(currDateTime)} - MESSAGE: ${msg}`);
                break;
        }

    }
}