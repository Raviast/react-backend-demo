const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  email: {
    type: String,
    index: true,
    unique: true,
    required : true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },

}, { versionKey: false });



const subscriptionModal = mongoose.model('subscription', subscriptionSchema);

module.exports = subscriptionModal;