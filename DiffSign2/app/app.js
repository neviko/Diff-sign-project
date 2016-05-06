// create the module and name it diffSign
var diffSign = angular.module('diffSign', ['ngRoute', 'ui.bootstrap','media']);


// configure our routes
diffSign.config(function ($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'app/home/home.html',
            controller  : 'homeController'
        })
        .when('/home', {
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
    
        .when('/playVideo/:videoName', {
            templateUrl : 'app/learningMode/playVideo.html',
            controller  : 'playVideoController'

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
            templateUrl : 'app/games/trivia/triviaGame.html',
            controller  : 'gamesController'

        });

});
