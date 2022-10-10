const http = require("http");
const fs = require("fs");
const os = require("os");
const ip = require('ip');

http.createServer((req, res) => {
  if (req.url === "/") {
      fs.readFile("./public/index.html", "UTF-8", (err, body) => {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(body);
    });
  } else if(req.url.match("/sysinfo")) {
    // Declare system hostname, uptime, memory, free memory
    myHostName=os.hostname();
    serverUptime=os.uptime();
    totalMemory=os.totalmem()/1048576 + " MB";
    freeMemory=os.freemem()/1048576 + " MB";
    numCpu=os.cpus().length;
    // Converting time from seconds to Days, Hours, Minutes, Seconds
    var d = Math.floor(serverUptime / (3600*24));
    var h = Math.floor(serverUptime % (3600*24) / 3600);
    var m = Math.floor(serverUptime % 3600 / 60);
    var s = Math.floor(serverUptime % 60);
    serverUptime="Days: " + d + ", Hours: " + h + ", Minutes: " + m + ", Seconds: " + s
    html=`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node JS Response</title>
      </head>
      <body>
        <p>Hostname: ${myHostName}</p>
        <p>IP: ${ip.address()}</p>
        <p>Server Uptime: ${serverUptime} </p>
        <p>Total Memory: ${totalMemory} </p>
        <p>Free Memory: ${freeMemory} </p>
        <p>Number of CPUs: ${numCpu} </p>
      </body>
    </html>`
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end(`404 File Not Found at ${req.url}`);
  }
}).listen(3000);

console.log("Server listening on port 3000");