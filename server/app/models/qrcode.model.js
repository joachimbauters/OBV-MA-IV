const mongoose = require('mongoose');

const QrcodeSchema = mongoose.Schema(
  {
    title: String,
    type: String,
    voertuignummer: Number
  },
  {
    timestamps: true
  }
);

QrcodeSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Qrcode', QrcodeSchema);
