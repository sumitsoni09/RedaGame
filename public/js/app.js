const app = angular.module('GamerApp', [])

app.controller('MainController', ['$http', function($http){
  const controller = this;

  this.showModal = false;

  this.showOneGame = game => {
    this.game = game;
    this.showModal = !this.showModal;
}

  this.createGame = function() {
    $http({
      method: 'POST',
      url: '/redagame',
      data: this.createForm
    }).then(function(response){
      controller.games.push(response.data);
      controller.createForm = {};
    }, error => {
      console.log(error);
    })
  }

  this.getGames = function(){
    $http({
      method: 'GET',
      url: '/redagame'
    }).then(function(response){
      controller.games = response.data
    }, error => {
      console.log(error);
    })
  }

  this.delete = function(game){
    $http({
      method: 'DELETE',
      url: '/redagame/' + game._id
    }).then(function(response){
      controller.getGames();
    }, function(error){
      console.log(error);
    })
  }

  this.editGame = function(game){
    console.log('the edit function is running');
    console.log(game);
    $http({
      method: 'PUT',
      url: '/redagame/' + game._id,
      data: {
        name: this.updatedName,
        image: this.updatedImage,
        rating: this.updatedRating,
        description: this.updatedDescription,
        price: this.updatedPrice
      }
    }).then((response) => {
      this.getGames();
    }, (err)=> {
      console.log(err);
    })
  }
  this.getGames();

  this.showOneGame = game => {
    this.game = game;
    this.showModal = !this.showModal;
  }
  
}])
