var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var rAssgnSchema = new Schema({
    empId:{
        courseName: String,
        assignmentName: String,
        required :true,
        dueDate: Date
    }
})