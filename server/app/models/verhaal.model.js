const mongoose = require('mongoose');

const VerhaalSchema = new mongoose.Schema(
  {
    naam: String,
    leeftijd: Number,
    vraag: String,
    verhaal: String,
    voertuignummer: Number,
    stoelnummer: Number
    // ,rating: {type: mongoose.Schema.Types.ObjectId, ref: 'Rating'}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Verhaal', VerhaalSchema);
