const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Order', orderSchema)
