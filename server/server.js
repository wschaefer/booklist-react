var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../app/build")));
app.listen(process.env.PORT || 7777,function(){
    console.log("Started listening on port", process.env.PORT || 7777);
})
