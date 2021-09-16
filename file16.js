const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("this is home page")
});

app.get('/about', function (req, res) {
    res.send("this is about page")
});


app.get('/login', function (req, res) {
    res.send("this is login page : get")
});
app.post('/login', function (req, res) {
    res.send("this is login page : post")
});
app.put('/login', function (req, res) {
    res.send("this is login page : put")
});
app.delete('/login', function (req, res) {
    res.send("this is login page : delete")
});

app.listen(4500);