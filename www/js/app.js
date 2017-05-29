
var app = angular.module('starter', ['ionic']);


app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
    });

    $stateProvider.state('registration', {

          url: '/registration',
          templateUrl: 'templates/registration.html',
          controller: 'registrationCtrl'

    });

    $stateProvider.state('login', {

          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'

    });

    // $stateProvider.state('allposts', {
    //
    //       url: '/allposts',
    //       templateUrl: 'templates/allposts.html',
    //       controller: 'allpostsCtrl'
    //
    // });

    $stateProvider.state('allpostsDetails', {

          url: '/allpostsDetails',
          templateUrl: 'templates/allpostsDetails.html',
          controller: 'allpostsDetailsCtrl'

    });

    $stateProvider.state('app.allposts', {
          url: '/allposts',
          views: {
            'menuContent': {
              templateUrl: 'templates/allposts.html',
              controller: 'allpostsCtrl'
            }
          }
    });

    $urlRouterProvider.otherwise('/login');

});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);


      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
