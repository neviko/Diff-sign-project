(function(app){

    function Learning_playgroundController($scope,$http,$routeParams) {
        $scope.message='לימוד גן משחקים';

        var onUsersComplete = function(response) {
            $scope.users = response.data;
        };


        var onRepos = function(data) {
            $scope.repos = data;
        };

        $http.get("https://api.github.com/users").then(onUsersComplete);


    };

    app.controller('Learning_playgroundController',Learning_playgroundController);


})( angular.module('diffSign'));


