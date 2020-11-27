const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stackSchema = new Schema({
    name: String,
    project: { type: Schema.Types.ObjectId, ref: 'Projects' }
}, {
    timestamps: true
});


module.exports = mongoose.model('StackTech', stackSchema);