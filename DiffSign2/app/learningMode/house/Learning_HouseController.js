(function(app){

    function Learning_HouseController($scope,$http,$routeParams) {
        $scope.message='הלימוד של כלי בית';

        var onUsersComplete = function(response) {
            $scope.users = response.data;
        };


        var onRepos = function(data) {
            $scope.repos = data;
        };

        $http.get("https://api.github.com/users").then(onUsersComplete);


    };


    app.controller('Learning_HouseController',Learning_HouseController);


})( angular.module('diffSign'));


