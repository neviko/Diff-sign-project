(function(app){

    function playVideoController($scope,$http,$routeParams) {
        $scope.messagee='Diff-Sign Player';
        $scope.videoName = $routeParams.videoName; 
        $scope.clips=clips;        

       
        
    };

    app.controller('playVideoController',playVideoController);

})( angular.module('diffSign'));


/*

(function(app){

    function playVideoController($scope,$http,$routeParams) {
        $scope.messagee='RAPHY PLAYER';
        $scope.linkVideo = $routeParams.linkVideo; 
        $scope.clips=clips;        

        $scope.videoSources = [];
        $scope.loadVideos = function(p1) {
        $scope.videoSources.push(p1);
        };
        
    };

    app.controller('playVideoController',playVideoController);

})( angular.module('diffSign'));


        
            */