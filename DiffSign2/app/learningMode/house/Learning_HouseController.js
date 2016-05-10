(function(app){


    function Learning_HouseController($scope,$http,$routeParams,$window,$sce) {
        $scope.message='כלי בית';
        $scope.clips=clips;
        $scope.clip = 
        {
            name_en: "",
            name_heb: "",
            category: "",
            clip_url: "",
            pic_url: ""
        };
        //function to repair the url to be trust
        $scope.trustSrc = function(src) 
        {
            return $sce.trustAsResourceUrl(src);
        }
        //function to show the video clip
        $scope.goShow = function(clip) 
        {    
            $scope.clip = clip;
        };
    };
    app.controller('Learning_HouseController',Learning_HouseController);
 
})( angular.module('diffSign'));



