let moment = require('moment');

let myDate = moment('17071994', 'DDMMYYYY');
let fromNow = myDate.fromNow();
console.log(fromNow)