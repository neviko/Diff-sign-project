(function(app) {

    var contactUsController= function($scope,$http)
    {
        $scope.isClicked=false;
        $scope.form = {};

        $scope.clicked = function ()
        {
            
            
            $http.post('/contact-us', data=$scope.form)
            .then(function(res){
                alert(res.data);
            })
            .catch(function(error){
                
            });
            
//            window.location.href = "mailto:itairusso0@gmail.com?subject=Shai-Project&body="+$scope.body;
//            $scope.isClicked=true;
//            if($scope.name == "")
//            {
//                $scope.message = " תודה רבה ";
//            }
//
//            else
//            {
//
//                $scope.message = " תודה רבה " + $scope.name;
//            }
//            
                        
            
        };

    };

    app.controller("contactUsController",["$scope","$http",contactUsController]);



})( angular.module('diffSign'));


