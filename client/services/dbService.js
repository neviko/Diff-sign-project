(function(){
    
    angular.module('diffSign').factory('restService', Service); 
    
    function Service($http, $sce, $q) {
        var service = {}; // the returned element
        service.get_table = get_table;
        return service;
        
        // get table by category from server
        function get_table(category) {
            var table;
            var defer = $q.defer();
            console.log('in get_table func, category: '+category);
            $http.get('/get_table',{params:{category}})
                .then(function successCallback(res) {
                    console.log('in successCallback, res: '+res.data);
                    defer.resolve(res);
                }, function errorCallback(res) {
                    console.log('in errorCallback, res: '+res.data);
                });
            
            return defer.promise;
        }
        
    }
})();