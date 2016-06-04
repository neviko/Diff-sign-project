(function(app) {

    var contactUsController= function($scope,$http)
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
        
            $scope.handleFormSubmit = function () {
             $http.post('./scripts/send_form_email.php').success(function (data, status) {
		         if (data.success) {
		             $window.alert("Thank you! Your message has been sent.");
		           

		             // display success message
		             $scope.$parent.message = true;
		         }			
		     }).error(function (data, status) {
		         $window.alert("Sorry, there was a problem!");
		     });
            };

    };

    app.controller("contactUsController",contactUsController);



})( angular.module('diffSign'));


