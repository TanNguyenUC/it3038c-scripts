const express = require('express');
const http = require("http");
const data = require("C:/widgets.json")


const server = http.createServer((req,res) => {
    if(req.url === "/") {
        res.writeHead(200, {"Content-type": "text/j son"});
        res.end(JSON.stringify(data));
    }
    else if(req.url === "/blue"){
        listBlue(res);
    }
    else if(req.url === "/last"){
        listWidgets(res)
    }
    else{
        res.writeHead(404, {"Content-type": "text/plain"});
        res.end("Data not found");
    }
});

const listWidgets = (res) => {
    for(var i = 0; i < data.length; i++)
    {   
        res.write(data[i]['name'] + " is " + data[i]['color'] + "\n")
    }  
    res.end()
};

const listBlue = (res) => {
    const colorBlue = data.filter((item) => {
        return item.color === "blue";
    
});
    res.end(JSON.stringify(colorBlue));
}

server.listen(3000);
console.log("Server is listening on port 3000")
