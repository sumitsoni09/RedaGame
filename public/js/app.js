const app = angular.module('GamerApp', [])

app.controller('MainController', ['$http', function($http){
  const controller = this;

  this.showModal = false;
  this.games = '';
  this.game = '';
  this.createForm = {};

  this.includePath = 'partials/mainIndex.html';
  this.changeInclude = (path) => {
  this.includePath = 'partials/'+ path + '.html';
  }
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

  this.deleteGame = function(game){
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

app.controller('UserController', ['$http', function($http){
  const controller = this;

  this.showCreateModal = false;
  this.showUserModal = false;
  this.userGames = '';
  this.userGame = '';
  this.createForm = {};

  this.indexOfEditFormToShow = 1;

  this.toggleShowNewForm = (userGame) => {
    this.showNewForm = !this.showNewForm
  }

  this.toggleCreateUserGame = () => {
    this.showCreateUserGameModal = !this.showCreateUserGameModal
  }

  this.toggleShowEditForm = (userGame) => {
    this.userGame = userGame;
    this.showEditForm = !this.showEditForm
  }

  this.showOneUserGame = userGame => {
    this.userGame = userGame;
    this.showUserModal = !this.showUserModal;
}

  this.createUserGame = function() {
    $http({
      method: 'POST',
      url: '/usergames',
      data: this.createForm
    }).then(function(response){
      controller.userGames.push(response.data);
      controller.createForm = {};
      this.showNewForm = null;
    }, error => {
      console.log(error);
    })
  }

  this.getUserGames = function(){
    $http({
      method: 'GET',
      url: '/usergames'
    }).then(function(response){
      controller.userGames = response.data
    }, error => {
      console.log(error);
    })
  }

  this.deleteUserGame = function(userGame){
    $http({
      method: 'DELETE',
      url: '/usergames/' + userGame._id
    }).then(function(response){
      controller.getUserGames();
    }, function(error){
      console.log(error);
    })
  }

  this.editUserGame = function(userGame){
    console.log('the edit function is running');
    console.log(userGame);
    $http({
      method: 'PUT',
      url: '/usergames/' + userGame._id,
      data: {
        name: this.updatedName,
        image: this.updatedImage,
        rating: this.updatedRating,
        description: this.updatedDescription,
        price: this.updatedPrice
      }
    }).then((response) => {
      this.getUserGames();
    }, (err)=> {
      console.log(err);
    })
  }
  this.showEditForm = false;
  this.getUserGames();

  this.showOneUserGame = userGame => {
    this.userGame = userGame;
    this.showModal = !this.showModal;
  }

}])


app.controller('AuthController', ['$http', function($http){
  const controller = this;
    this.login = ''
    this.password= ''

  this.createUser = function(){
    $http({
      method: 'POST',
      url: '/users',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(function(response){
      console.log(response);
    }, function(){
      console.log('error');
    });
  }

  this.logIn = function(){
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(function(response){
      console.log(response)
    })
  }

  this.goApp = function(){
    $http({
      method: 'GET',
      url: '/app'
    }).then(function(response){
      controller.loggedInUsername = response.data.username;
    }, function(){
      console.log("error");
    })
  }

}])
