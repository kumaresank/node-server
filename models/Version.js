const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const versionSchema = new Schema({
    name: String,
    description: String,
    type: String,
    technology: { type: Schema.Types.ObjectId, ref: 'Technology' }
}, {
    timestamps: true
});


module.exports = mongoose.model('Version', versionSchema);