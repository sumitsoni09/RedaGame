const express = require('express')
const games = express.Router()
const Games = require('../models/games.js')
const gamesSeed = require('../models/seed.js')

games.get('/', (req, res)=> {
  Games.find({}, (err, foundGames)=> {
    res.json(foundGames)
  })
})

games.get('/seed', (req, res)=> {
  Games.create(gamesSeed, (err, games)=> {
    console.log(games);
    res.redirect('/')
  })
})

games.post('/', (req, res) => {
  Games.create(req.body, (err, createdGame) => {
    res.json(createdGame)
  })
})

games.delete('/:id', (req, res)=> {
  Games.findByIdAndRemove(req.params.id, (err, deletedGame)=>{
    res.json(deletedGame)
  })
})

games.put('/:id', (req, res)=>{
  console.log('edit route is running');
  Games.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGame)=>{
    console.log(err);
    console.log(req.params.id);
    console.log(updatedGame);
    res.json(updatedGame)
  })
})

games.get('/dropdatabase/areyousure', (req, res)=>{
  Games.collection.drop();
  res.send('Dropped the seed, <a href = "/seed"> Click here </a> to reseed the data ')
})

module.exports = games;
