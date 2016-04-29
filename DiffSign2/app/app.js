// create the module and name it diffSign
var diffSign = angular.module('diffSign', ['ngRoute','ui.bootstrap']);


// configure our routes
diffSign.config(function($routeProvider) {
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

        .when('/games', {
            templateUrl : 'app/games/games.html',
            controller  : 'gamesController'

        });

});




// create the controller and inject Angular's $scope
//diffSign.controller('loginController', function($scope) {
//    // create a message to display in our view
//    $scope.message = 'סרטי בורקס';
//});
//
//diffSign.controller('homeController', function($scope) {
//    $scope.message = 'סרט מדהים'
//    $scope.image = 'pic/ho.jpg';
//    ;
//});

diffSign.controller('learningModeController', function($scope)
{
    $scope.message = 'סרט מצויין';
    $scope.image ='pic/aha.jpg';
    ;
});

