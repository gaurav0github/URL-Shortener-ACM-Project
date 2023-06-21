const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  notes: {
    type: String,
    required: false,
    default: "None"
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)