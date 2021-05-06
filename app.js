var express = require('express');
var app = express();
app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use(bodyParser.json());

var personRoute = require('./asgn-router/')

app.get('/', (req, res) => {
    res.send('Successful response.');
  });

  console.log(process.env.MONGO_URI);
  const username = process.env.username;
  const password = process.env.password;
  const server = process.env.server;
  const database = process.env.database;

  const mongoose = require(mongoose);
  mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true});

const server = ''; // REPLACE WITH YOUR DB SERVER
const database = '';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  };
}

