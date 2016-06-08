(function(app) {

    var contactUsController= function($scope,$http)
    {
        $scope.message = "";
        $scope.isClicked=false;
        $scope.form = {};

        $scope.clicked = function ()
        {
            
            
            $http.post('/contact-us', data=$scope.form)
            .then(function(res)
            {                
                $scope.message = " ההודעה שלך נשלח בהצלחה"
            })
            .catch(function(error)
            {
                $scope.message = " השליחה נכשלה "

            });
                      
        };

    };

    app.controller("contactUsController",["$scope","$http",contactUsController]);



})( angular.module('diffSign'));


