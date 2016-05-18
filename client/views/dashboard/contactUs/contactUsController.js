(function(app) {

    var contactUsController= function($scope)
    {
        $scope.message="צור קשר";
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



})( angular.module('diffSign'));


