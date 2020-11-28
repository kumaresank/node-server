const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stackSchema = new Schema({
    name: String,
    technology: { type: Schema.Types.ObjectId, ref: 'Technology' },
    version: { type: Schema.Types.ObjectId, ref: 'Version' }
}, {
    timestamps: true
});


module.exports = mongoose.model('StackTech', stackSchema);