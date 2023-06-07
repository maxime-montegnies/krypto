var express = require("express");
 
var app = express();
 
app.use(express.static('public'));
 
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/fonts', express.static(__dirname + '/fonts'));
 
var server = app.listen(process.env.PORT, function(){
    console.log(process.env.PORT);
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});