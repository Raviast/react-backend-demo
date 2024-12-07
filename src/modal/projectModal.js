const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
}, { versionKey: false });



const projectModal = mongoose.model('project', projectSchema);

module.exports = projectModal;