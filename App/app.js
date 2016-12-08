var d3 = require("d3");
var splunkjs = require('splunk-sdk');

// Create a Service instance and log in 
var service = new splunkjs.Service({
    username: "admin",
    password: "a1s2d3f4",
    scheme: "https",
    host: "localhost",
    port: "8089",
    version: "5.0"
});

var query = 'source="base data.csv" State_To = "CA"'

var jobs = service.jobs();

console.log("jobs: " + Object.keys(jobs))

 jobs.oneshotSearch("search ERROR", function(err, results) {
     console.log("search starting")
     if(err){
         console.log(err)
     } else {
         console.log(results)
     }
 });
// d3.xhr(url).header("Content-Type", "application/json").post(JSON.stringify({ year: "2012", customer: "type1" }), function (err, rawData) {
//     var data = JSON.parse(rawData);
//     console.log("got response", data);
// });