var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var updateAssgnSchema = new Schema({
    empId:{
        courseName: String,
        assignmentName: String,
        required :true,
        dueDate: Date
    }
})