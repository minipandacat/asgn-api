console.log(process.env);
const mongoose = require(mongoose);
mongoose.connect(process.env.MONGO_URI {useNewURLParser: true});

var bodyParser = require('body-parser')
app.use(bodyParser.json());

const express = require('express');
const app = express();
app.use(express.static('public'));