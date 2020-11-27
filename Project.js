const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    team: { type: Schema.Types.ObjectId, ref: 'Teams' },
    technologies: [{ type: Schema.Types.ObjectId, ref: 'Teams' }]
}, {
    timestamps: true
});


module.exports = mongoose.model('StackTech', projectSchema);