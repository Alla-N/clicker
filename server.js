const express = require('express');
const path = require('path');
const app = express();

app.use(express.statis(__dirname + '/dist/clicker'));

app.get('/', function(req, res){
res.sendFile(path.join(__dirname + '/dist/clicker/src/index.html'))
});

app.listen(process.env.PORT || 8080);
