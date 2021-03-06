const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  studio: {
    type: mongoose.Types.ObjectId,
    ref: 'Studio',
    required: true
  },
  released: {
    type: Number,
    required: true
  },
  cast: [{ 
    role: String, 
    actor: {
      type: mongoose.Types.ObjectId,
      ref: 'Actor',
      required: true
    } 
  }],
  reviews: [{
    rating: {
      type: mongoose.Types.ObjectId,
      ref: 'Review'
    },
    review: {
      type: mongoose.Types.ObjectId,
      ref: 'Review'
    }
  }]
});

module.exports = mongoose.model('Film', filmSchema);
