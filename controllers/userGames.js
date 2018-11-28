const express = require('express')
const userGames = express.Router()
const UserGames = require('../models/userGames.js')

userGames.get('/', (req, res)=> {
  UserGames.find({}, (err, foundUserGames)=> {
    res.json(foundUserGames)
  })
})

userGames.get('/seed', (req, res)=> {
  UserGames.create(userGamesSeed, (err, userGames)=> {
    console.log(userGames);
    res.redirect('/')
  })
})

userGames.post('/', (req, res) => {
  UserGames.create(req.body, (err, createdUserGame) => {
    res.json(createdUserGame)
  })
})

userGames.delete('/:id', (req, res)=> {
  UserGames.findByIdAndRemove(req.params.id, (err, deletedUserGame)=>{
    res.json(deletedUserGame)
  })
})

userGames.put('/:id', (req, res)=>{
  console.log('edit route is running');
  UserGames.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUserGame)=>{
    console.log(err);
    console.log(req.params.id);
    console.log(updatedUserGame);
    res.json(updatedUserGame)
  })
})

userGames.get('/dropdatabase/areyousure', (req, res)=>{
  UserGames.collection.drop();
  res.send('Dropped the seed, <a href = "/seed"> Click here </a> to reseed the data ')
})

module.exports = userGames;
