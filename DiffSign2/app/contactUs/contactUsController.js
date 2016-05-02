(function() {
    var app = angular.module('diffSign');

    var contactUsController= function($scope){

        $scope.name = "";
        $scope.email="";

        $scope.clicked = function () {
            if($scope.name == "")
            {
                $scope.message = " תודה רבה ";
            }

            else
            {

                $scope.message = " תודה רבה " + $scope.name;
            }
        };

    };




    app.controller("contactUsController",contactUsController);



}());