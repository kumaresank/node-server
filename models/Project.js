const mongoose = require('mongoose');
const StackTech = require('./StackTech').schema;
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    description: String,
    icon: String,
    startDate: String,
    team: { type: Schema.Types.ObjectId, ref: 'Teams' },
    techs: [StackTech]
    // technologies: [{ type: Schema.Types.ObjectId, ref: 'StackTech' }]
}, {
    timestamps: true
});


module.exports = mongoose.model('Project', projectSchema);