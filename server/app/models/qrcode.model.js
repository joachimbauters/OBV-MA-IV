const mongoose = require('mongoose');

const QrcodeSchema = mongoose.Schema(
  {
    type: String,
    voertuignummer: Number,
    stoelnummer: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Qrcode', QrcodeSchema);
