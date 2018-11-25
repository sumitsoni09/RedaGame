const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema({
  name: String,
  image: String,
  rating: Number,
  description: String,
  price: Number
})

const Games = mongoose.model('Games', gamesSchema)

module.exports = Games;
