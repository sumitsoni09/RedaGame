const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const dotenv = require('dotenv').config();
const db = mongoose.connection;

// PORT
const PORT = process.env.PORT || 3000

const User = require('./models/users.js')
const Games = require('./models/games.js')

const sessionsController = require('./controllers/sessions.js')
const usersController = require('./controllers/users.js')
const gamesController =
require('./controllers/games.js')

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

// MIDDLEWARE
app.use(express.json())
app.use(express.static('public'))

// ROUTES
app.get('/app', (req, res)=>{
  if(req.session.currentUser){
    res.json(req.session.currentUser);
  }else{
    res.status(401).json({
      status: 401,
      message: 'not logged in'
    })
  }
});
app.use('/sessions', sessionsController)
app.use('/users', usersController)
app.use('/redagame', gamesController)

//ERROR / SUCCESS
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//DATABASE
//How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'redagame';

//CONNECT TO MONGO
mongoose.connect(MONGODB_URI, {useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('Connected to Mongoose!')
})

//OPEN THE CONNECTION TO MONGO
db.on('open', () => {});
//Listener localhost://3000 - this will reroute to index
app.listen(PORT, () => console.log('Connected to RedaGame on ', PORT));
