(function(){
    
    angular.module('diffSign').factory('dbService', Service); 
    
    function Service($http, $sce, $q) {
        var service = {}; // the returned element
        service.get_table = get_table;
        return service;
        
        // get table by category from server
        function get_table(category) {
            var table;
            var defer = $q.defer();
            $http.get('/get_table',{params:{category}})
                .then(function successCallback(res) {
                    console.log('in successCallback, res: '+res);
                    defer.resolve(res);
                }, function errorCallback(res) {
                    console.log('in errorCallback, res: '+res);
                });
            
            return defer.promise;
        }  
    }
})();