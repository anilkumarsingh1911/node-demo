const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/home.html")
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + "/about.html")
});

app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/login.html")
});

app.listen(4500);