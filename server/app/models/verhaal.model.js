const mongoose = require('mongoose');

const VerhaalSchema = mongoose.Schema(
  {
    naam: String,
    leeftijd: Number,
    vraag: String,
    verhaal: String,
    typevervoer: String,
    voertuignummer: Number,
    stoelnummer: Number,
    date: String,
    rating: {
      verliefd: {
        icon: {
          type: String,
          default: 'verliefd'
        },
        value: {
          type: Number,
          default: 0
        }
      },
      verbaasd: {
        icon: {
          type: String,
          default: 'verbaasd'
        },
        value: {
          type: Number,
          default: 0
        }
      },
      droevig: {
        icon: {
          type: String,
          default: 'droevig'
        },
        value: {
          type: Number,
          default: 0
        }
      },
      grappig: {
        icon: {
          type: String,
          default: 'grappig'
        },
        value: {
          type: Number,
          default: 0
        }
      }
    }
  },
  {
    timestamps: true
  }
);

const Verhaal = mongoose.model('Verhaal', VerhaalSchema);

module.exports = {
  Verhaal
};
