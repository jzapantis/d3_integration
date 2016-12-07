var d3 = require("d3");

d3.xhr(url)
    .header("Content-Type", "application/json")
    .post(JSON.stringify({ year: "2012", customer: "type1" }),
    function (err, rawData) {
        var data = JSON.parse(rawData);
        console.log("got response", data);
    });