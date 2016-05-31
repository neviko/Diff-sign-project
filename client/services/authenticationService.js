(function (app) {
    'use strict';

    
        app.factory('authenticationService', ["$http", Service]);

    // create a new service for all user - db hand shake
    function Service($http) 
    {
      
        function register(user)
        {
            return $http.post('url', user);
        }
        
        function login()
        {
            
        }
        
        var service = {}; // the returned element

        service.toRegister = register;
        service.toLogin = login;

        return service;
        
        
        
        
       
  
    }

})(angular.module('diffSign'));