const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: Number, required: true },
    city: { type: String, required: true },
}, { versionKey: false });



const contactModal = mongoose.model('contact', contactSchema);

module.exports = contactModal;