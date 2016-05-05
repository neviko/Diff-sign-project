(function(app){

    function Learning_LettersController($scope,$http,$routeParams) {
        $scope.message='מאגר האותיות';

        var onUsersComplete = function(response) {
            $scope.users = response.data;
        };


        var onRepos = function(data) {
            $scope.repos = data;
        };

        $http.get("https://api.github.com/users").then(onUsersComplete);


    };


    app.controller('Learning_LettersController',Learning_LettersController);


})( angular.module('diffSign'));


