const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema(
  {
    verhaal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Verhaal'
    },
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
module.exports = mongoose.model('Rating', RatingSchema);
