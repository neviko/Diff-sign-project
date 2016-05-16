/**
 * Created by Sayag on 26/04/2016.
 */
(function(app){

    function signUpController($scope) {
        $scope.message='מסך הרשמה';

    }

    app.controller('signUpController',signUpController); // declare on the controller and run loginController


})( angular.module('diffSign'));