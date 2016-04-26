(function(app){

    function loginController($scope) {
        $scope.message='WELCOME';
    }


    app.controller('homeController',homeController); // declare on the controller and run loginController


})( angular.module('diffSign'));


