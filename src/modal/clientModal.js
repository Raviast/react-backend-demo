const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    designation: { type: String, required: true },
    image: { type: String },
}, { versionKey: false });



const clientModal = mongoose.model('client', clientSchema);

module.exports = clientModal;