(function(app)
 {

    function Learning_HouseController($scope,$http,videoService) {
        $scope.message='כלי בית';
        $scope.clips=clips;
        
        // return a declaration that the url is trust        
       $scope.goTrust = function(src)
        {
            return videoService.trustSrc(src);
        };
        
        //function to insert into the scope the clip to show        
        $scope.goShow = function(clip) 
        {    
            $scope.clip = clip;
        };
    }
    app.controller('Learning_HouseController',Learning_HouseController);
 
})( angular.module('diffSign'));



