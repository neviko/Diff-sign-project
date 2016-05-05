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
        
        .when('/Learning_House', {
            templateUrl : 'app/learningMode/house/Learning_House.html',
            controller  : 'Learning_HouseController'

        })
    
        .when('/Learning_Letters', {
            templateUrl : 'app/learningMode/Letters/Learning_Letters.html',
            controller  : 'Learning_LettersController'

        })
        .when('/Learning_playground', {
            templateUrl : 'app/learningMode/playground/Learning_playground.html',
            controller  : 'Learning_playgroundController'

        })
        .when('/Learning_General', {
            templateUrl : 'app/learningMode/general/Learning_General.html',
            controller  : 'Learning_GeneralController'

        })

        .when('/games', {
            templateUrl : 'app/games/games.html',
            controller  : 'gamesController'

        });

});
