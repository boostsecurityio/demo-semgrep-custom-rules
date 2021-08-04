var express = require("express");
var app = express();
app.get("/", function (req, res) {
    console.log("safe");
});
app.listen(8000);
