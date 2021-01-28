var http = require("http");
var express = require("express");
var apiServer = express();

var hostname = "127.0.0.1";
var port = 3000;

apiServer.listen(port, hostname, () => {
    console.log("server running at http://%s:%d/", hostname, port);
});

apiServer.get("/nome", (req, res) =>{
    console.log ("ho ricevuto una get su nome");
    res.send ("ciao, il nome del server è: node")
});


apiServer.get("/", function(req, res){
    res.send("sei in home");
})