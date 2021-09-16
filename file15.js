const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send("hello express")
})

app.get('/mmm', function (req, res) {
    res.send("hello from my pc")
}).listen(4500);
