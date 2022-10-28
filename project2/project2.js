// https://expressjs.com/en/resources/middleware/morgan.html
// https://www.geeksforgeeks.org/what-is-morgan-in-node-js/
// https://www.geeksforgeeks.org/express-js-express-router-function/
// https://www.folkstalk.com/2022/09/js-read-text-file-line-by-line-with-code-examples.html
const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const port = 3000
let app = express()
var router1 = express.Router();
var router2 = express.Router();
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('short', { stream: accessLogStream }))



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

app.listen(port, () => {
    console.log(`Started at ${port}`);
  });