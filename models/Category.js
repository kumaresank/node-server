const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
    description: String,
    icon: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Category', categorySchema);