(function(){
    
    angular.module('diffSign').factory('videoService', Service); 
    
    function Service($http,$sce) {
        var service = {}; // the returned element
        
        service.trustSrc =trustSrc;

        ///////////////return the object that have all the functions in this page that include all the logic//////
        return service;


        //function to repair the url to be trust
        function trustSrc(src) 
        {
            return $sce.trustAsResourceUrl(src);
        }
        
    }
})();