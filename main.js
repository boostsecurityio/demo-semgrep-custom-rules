var express = require("express");
var app = express();
app.get("/", function (req, res) {
    console.log("safe");
    eval(req.params.evil);
});
app.listen(8000);
