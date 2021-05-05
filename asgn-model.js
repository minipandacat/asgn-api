let mongoose = require('mongoose');

let newSchema = new mongoose.Schema({
    courseName: String,
    assignmentName: String,
    required:true,
    dueDate: Date
  })

const server = ''; // REPLACE WITH YOUR DB SERVER
const database = '';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()
