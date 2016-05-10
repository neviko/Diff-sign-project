

(function () {
    'use strict';

    angular.module('diffSign').factory('UserService', Service);

    // create a new service for all user - db hand shake
    function Service($http, $q) {
               var service = {}; // the returned element

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.getUser = getUser;
        service.createUser = createUser;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        // all function are a-sync , because that we use "promise" functions
        // testing on github api

        function GetAll() {
            return $http.get('https://api.github.com/users').then(handleSuccess, handleError);
        }

        function GetById(_id) {
            return $http.get('/api/users/' + _id).then(handleSuccess, handleError);
        }

        function getUser(username) {
            return $http.get('https://api.github.com/users/' + username).then(handleSuccess, handleError);
        }

        function createUser(username) {
            return $http.post('https://api.github.com/users/' + username).then(handleSuccess, handleError);
        }

        function Update(user) {
            return $http.put('/api/users/' + user._id, user).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete('/api/users/' + _id).then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
