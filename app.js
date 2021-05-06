console.log(process.env);
const mongoose = require(mongoose);
mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true});

var bodyParser = require('body-parser')
app.use(bodyParser.json());

const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Successful response.');
  });

const server = ''; // REPLACE WITH YOUR DB SERVER
const database = '';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  };
}

