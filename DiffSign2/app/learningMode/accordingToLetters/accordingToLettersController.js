(function(app){

    function accordingToLettersController($scope,$http,$routeParams) {
        $scope.message='מאגר האותיות';

        var onUsersComplete = function(response) {
            $scope.users = response.data;
        };


        var onRepos = function(data) {
            $scope.repos = data;
        };

       $http.get("https://api.github.com/users").then(onUsersComplete);


    };


    app.controller('accordingToLettersController',accordingToLettersController); 


})( angular.module('diffSign'));


