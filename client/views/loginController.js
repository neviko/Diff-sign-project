(function (app) 
 {
    
    
app.controller("LoginCtrl",["$scope","$location",
    function(r,t)
    {     
        r.connect = function()
        {
            return t.path("/dashboard"),!1
        };
        
        
        r.userName = document.getElementById("userName").value;
        r.theEmail = document.getElementById("theEmail").value;
        r.password = document.getElementById("password").value;
        r.validatePassword = document.getElementById("validatePassword").value; 
        r.messagePassword="";

        r.myVar = false;
        
        r.toggle = function() 
        {
            r.myVar = !r.myVar;
        };
        
        r.register = function()
        {
            if(r.password != r.validatePassword)
                r.messagePassword = "הסיסמה שלך לא תקין";
            
            else 
                r.messagePassword = "";           
        };
        
    }
                            
                            ]
    );

})(angular.module('diffSign'));