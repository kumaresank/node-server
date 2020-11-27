const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    name: String,
}, {
    timestamps: true
});


module.exports = mongoose.model('Departments', departmentSchema);