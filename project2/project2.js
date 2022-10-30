// https://expressjs.com/en/resources/middleware/morgan.html - I learn how to use Morgan to create a web logger stream and output it to a file. The output is using morgan short format for web access log.
// https://www.geeksforgeeks.org/what-is-morgan-in-node-js/ - 
// https://www.geeksforgeeks.org/express-js-express-router-function/ - I learn how to create different route and create a basic express web server.
// https://www.folkstalk.com/2022/09/js-read-text-file-line-by-line-with-code-examples.html - I learn how to use readFileSync to display text files, in this case the log file on the web server.

const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const port = 3000
let app = express()
var router1 = express.Router();
var router2 = express.Router();
// create a write stream (in append mode), write the output to access.log
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger with short format in morgan
app.use(morgan('short', { stream: accessLogStream }))


// create two routes for the web server
router1.get('/', function (req, res, next) {
    res.send("Please go to /logs to see web access log");
    res.end();
  });   

router2.get('/logs', function (req, res, next) {
    const data = fs.readFileSync('./access.log',{encoding:'utf8', flag:'r'}).split('\n');
    res.send(data)
});

app.use(router1);
app.use(router2);

// App listens on port 3000
app.listen(port, () => {
    console.log(`Started at ${port}`);
  });