module.exports = class $ {
    constructor() { }
    /*
    *@date Return date in format - d m y H:M
    */
    getDate(date) {
        let d = new Date(date);

        return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
            d.getHours() + ":" + d.getMinutes();
    }
}