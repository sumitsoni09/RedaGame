const mongoose = require('mongoose')

const userGamesSchema = new mongoose.Schema({
  name: String,
  image: String,
  rating: Number,
  description: String,
  price: Number
})

const UserGames = mongoose.model('UserGames', userGamesSchema)

module.exports = UserGames;
