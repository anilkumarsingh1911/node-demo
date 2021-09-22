const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://peter321:1orHa6ZIkkEzINUS@cluster0.vkb6h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/tutorial',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) throw err;
        console.log('Connected to MongoDB!!!')
    });