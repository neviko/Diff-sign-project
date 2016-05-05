(function(app){

    function Learning_GeneralController($scope,$http,$routeParams) {
        $scope.message='כללי';

        var onUsersComplete = function(response) {
            $scope.users = response.data;
        };


        var onRepos = function(data) {
            $scope.repos = data;
        };

        $http.get("https://api.github.com/users").then(onUsersComplete);


    };


    app.controller('Learning_GeneralController',Learning_GeneralController);


})( angular.module('diffSign'));


