const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    members: [String],
    coc: { type: Schema.Types.ObjectId, ref: 'CoCs' }
}, {
    timestamps: true
});


module.exports = mongoose.model('Teams', teamSchema);