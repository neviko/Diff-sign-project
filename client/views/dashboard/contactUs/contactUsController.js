(function(app) {

    var contactUsController= function($scope){
         $scope.isClicked=false;
        $scope.body="";
        $scope.name = "";
        $scope.email="";

        $scope.clicked = function () {
            
            window.location.href = "mailto:itairusso0@gmail.com?subject=Shai-Project&body="+$scope.body;
            $scope.isClicked=true;
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


