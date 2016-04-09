// create the module and name it diffSign
var diffSign = angular.module('diffSign', ['ngRoute']);

// configure our routes
diffSign.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'app/home/home.html',
            controller  : 'loginController'
        })

        // route for the about page

        .when('/login', {
            templateUrl : 'app/login/login.html',
            controller  : 'homeController'
        })


        .when('/signUp', {
            templateUrl : 'app/signUp/signUp.html',
            controller  : 'signUpController'
        })


        // route for the contact page
        .when('/learningMode', {
            templateUrl : 'app/learningMode/learningMode.html',
            controller  : 'learningModeController'
        });
});




// create the controller and inject Angular's $scope
diffSign.controller('loginController', function($scope) {
    // create a message to display in our view
    $scope.message = 'סרטי בורקס';
});

diffSign.controller('homeController', function($scope) {
    $scope.message = 'סרט מדהים'
    $scope.image = 'pic/ho.jpg';
    ;
});

diffSign.controller('learningModeController', function($scope)
{
    $scope.message = 'סרט מצויין';
    $scope.image ='pic/aha.jpg';
    ;
});



diffSign.controller('signUpController', function($scope) {
    $scope.message = 'סרט מצויין';
    $scope.image ='pic/aha.jpg';
    ;
});
/**
 * Created by Sayag on 04/04/2016.
 */
