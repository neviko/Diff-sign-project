(function (app) 
 {
    
    
app.controller("LoginCtrl",["$scope","$location",
    function(r,t)
    {
        r.submit=function()
        {
            return t.path("/dashboard"),!1
        }
        
        
        
        
        
        
    }
                            
                            ]
    );

})(angular.module('diffSign'));