var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var listAssgnSchema = new Schema({
    empId:{
        courseName: String,
        assignmentName: String,
        required :true,
        dueDate: Date
    }
})