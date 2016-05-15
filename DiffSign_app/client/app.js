// create the module and name it diffSign
var diffSign = angular.module('diffSign', ['ngRoute', 'ui.bootstrap']);


// configure our routes
diffSign.config(function ($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'home/home.html',
            controller  : 'homeController'
        })
        .when('/home', {
            templateUrl : 'home/home.html',
            controller  : 'homeController'
        })

        // route for the about page

        .when('/login', {
            templateUrl : 'login/login.html',
            controller  : 'loginController'
        })


        .when('/signUp', {
            templateUrl : 'signUp/signUp.html',
            controller  : 'signUpController'
        })


        // route for the contact page
        .when('/learningMode', {
            templateUrl : 'learningMode/learningMode.html',
            
        })

        .when('/contactUs', {
            templateUrl : 'contactUs/contactUs.html',
            controller  : 'contactUsController'

        })

        .when('/Learning_House', {
            templateUrl : 'learningMode/house/Learning_House.html',
            controller  : 'Learning_HouseController'

        })


        .when('/Learning_Letters', {
            templateUrl : 'learningMode/Letters/Learning_Letters.html',
            controller  : 'Learning_LettersController'

        })
        .when('/Learning_playground', {
            templateUrl : 'learningMode/playground/Learning_playground.html',
            controller  : 'Learning_playgroundController'

        })
        .when('/Learning_General', {
            templateUrl : 'learningMode/general/Learning_General.html',
            controller  : 'Learning_GeneralController'

        })

        .when('/games', {
            templateUrl : 'games/trivia/trivia.html',
            controller  : 'triviaController'

        });

});
