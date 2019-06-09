const mongoose = require('mongoose');

const VerhaalSchema = new mongoose.Schema(
  {
    naam: String,
    leeftijd: Number,
    vraag: String,
    verhaal: String,
    typevervoer: String,
    voertuignummer: Number,
    stoelnummer: Number,
    date: String
    // ,rating: {type: mongoose.Schema.Types.ObjectId, ref: 'Rating'}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Verhaal', VerhaalSchema);
