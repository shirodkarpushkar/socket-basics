var moment = require('moment')
var now = moment()
console.log("now: ", now.format("MMM Do YYYY h:mma"));
console.log("now: ", now.format("X"));
console.log("now: ", now.format("x"));


var timestamp = 1589805055666;
var timestampMoment = moment.utc(timestamp)

console.log("timestampMoment", timestampMoment.format("h:mma"));