var http = require("http");
var express = require("express");
const { dirname } = require("path");
var apiServer = express();

var hostname = "127.0.0.1";
var port = 3000;
var nome = "marco"
var path = require ("path");

apiServer.listen(port, hostname, () => {
    console.log("server running at http://%s:%d/", hostname, port);
});

apiServer.get("/nome", (req, res) =>{
    console.log ("ho ricevuto una get su nome");
    res.send ("ciao, il nome del server è: "+ nome);
});


apiServer.get("/", function(req, res){
    res.send("sei in home");
})

apiServer.get("/index", function(req, res){
    //res.sendFile("C:\\Users\\corbetta.marco\\Desktop\\prova node\\provaNode\\index.html");
    res.sendFile(path.join(__dirname + "\\index.html"));
})

apiServer.get ("/mioNome", (req, res)=>{
    console.log ("ho ricevuto una get su nome con query", req.query);
    res.send ("ciao, il nome del server è: "+ req.query.nome);
});
