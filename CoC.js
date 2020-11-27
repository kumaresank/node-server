const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cocSchema = new Schema({
    name: String,
    department: { type: Schema.Types.ObjectId, ref: 'Departments' }
}, {
    timestamps: true
});


module.exports = mongoose.model('CoCs', cocSchema);