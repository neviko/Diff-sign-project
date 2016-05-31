function LoginCtrl($scope,$location,authenticationService)
{

    $scope.user ={};
    $scope.connect = function()
    {
        return $location.path("/dashboard"),!1
    };
        
    $scope.messagePassword="";

    $scope.myVar = false;
    $scope.toggle = function() 
    {
        $scope.myVar = !$scope.myVar;
    };
        
    $scope.register = function()
    {
        authenticationService.register(user)
        .then(function(response){
            //to get the response call response.data
            //ex: server sent {id:'', text:""}
            //do response.data.id
        })
        .catch(function(error){
            return $location.path("/dashboard"),!1

            
        })
    }
};
angular.module('diffSign').controller('LoginCtrl',LoginCtrl);
