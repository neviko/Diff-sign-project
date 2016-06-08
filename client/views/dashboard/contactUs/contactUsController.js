(function(app) {

    var contactUsController= function($scope,$http)
    {
        $scope.message = "";
        $scope.message2 = "";

        $scope.isClicked=false;
        $scope.form = {};
        $scope.m_sending=true;

        $scope.clicked = function ()
        {
            
            
            $http.post('/contact-us', data=$scope.form)
            .then(function(res)
            {                
                $scope.message = " ההודעה שלך נשלח בהצלחה";
                $scope.message2 = "תודה";
                $scope.form={};
                $scope.m_sending=false;
            })
            .catch(function(error)
            {
                $scope.message = " השליחה נכשלה "

            });
                      
        };

    };

    app.controller("contactUsController",["$scope","$http",contactUsController]);



})( angular.module('diffSign'));


