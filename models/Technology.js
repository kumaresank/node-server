const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technologySchema = new Schema({
    name: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
}, {
    timestamps: true
});


module.exports = mongoose.model('Technology', technologySchema);