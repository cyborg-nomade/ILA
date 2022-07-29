var http = require("follow-redirects").http;
var fs = require("fs");

var options = {
    method: "POST",
    hostname: "localhost",
    port: 7000,
    path: "/ILA/api/users/login",
    headers: {
        "Content-Type": "application/json",
    },
    maxRedirects: 20,
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
});

var postData = JSON.stringify({
    username: "urielf",
    password: "W$BcEbrgq33!",
});

req.write(postData);

req.end();
