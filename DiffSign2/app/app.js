// create the module and name it diffSign
var diffSign = angular.module('diffSign', ['ngRoute', 'ui.bootstrap']);


// configure our routes
diffSign.config(function ($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'app/home/home.html',
            controller  : 'homeController'
        })

        // route for the about page

        .when('/login', {
            templateUrl : 'app/login/login.html',
            controller  : 'loginController'
        })


        .when('/signUp', {
            templateUrl : 'app/signUp/signUp.html',
            controller  : 'signUpController'
        })


        // route for the contact page
        .when('/learningMode', {
            templateUrl : 'app/learningMode/learningMode.html',
            controller  : 'learningModeController'
        })

        .when('/contactUs', {
            templateUrl : 'app/contactUs/contactUs.html',
            controller  : 'contactUsController'

        })
        
        .when('/Learning_Kitchen', {
            templateUrl : 'app/learningMode/kitchen/Learning_Kitchen.html',
            controller  : 'Learning_KitchenController'

        })
    
        .when('/accordingToLetters', {
            templateUrl : 'app/learningMode/accordingToLetters/accordingToLetters.html',
            controller  : 'accordingToLettersController'

        })

        .when('/games', {
            templateUrl : 'app/games/games.html',
            controller  : 'gamesController'

        });

});
