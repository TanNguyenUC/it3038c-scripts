const express = require('express');
const http = require("http");
const data = require("C:/widgets.json")


const server = http.createServer((req,res) => {
    if(req.url === "/") {
        res.writeHead(200, {"Content-type": "text/json"});
        res.end(JSON.stringify(data));
    }
    else if(req.url === "/blue"){
        listBlue(res);
    }
    // List all widgets
    else if(req.url === "/widgets"){
        listWidgets(res)
    }
    else{
        res.writeHead(404, {"Content-type": "text/plain"});
        res.end("Data not found");
    }
});

// Accessing the object, transform the first letter to upper case, slice the rest of the string with a new line at the end.
const listWidgets = (res) => {
    for(var i = 0; i < data.length; i++)
    {   
        res.write(data[i]['name'][0].toUpperCase() + data[i]['name'].slice(1) + " is " + data[i]['color'] + ".\n")
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
