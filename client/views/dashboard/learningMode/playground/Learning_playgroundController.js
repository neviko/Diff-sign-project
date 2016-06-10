function Learning_playgroundController($scope,$http,$interval,videoService,dbService) 
{
    $scope.message='גן משחקים';
    $scope.clips =  [];
    var visited = 0;
    var visiting = 0;
         $scope.isLoading = true;
    $scope.loadingMessagee = "הסרטון בטעינה, אנא המתן.";
    
    //Mute
    var video = document.getElementById("learn_video");
    video.muted= true;
    
         video.oncanplaythrough = function () {
        $scope.$apply(function () {
            $scope.isLoading = false;
        });
    };
    
    video.onloadstart = function(){
          $scope.$apply(function () {
            $scope.isLoading = true;
        });
    }
    

    
    //----------- Get the db table
    var category = 'playground';
    var table_list = dbService.get_table(category);
    var wait_db = $interval(function() {
        // When server returned the table
        if (table_list.$$state.status > 0) {
            $scope.clips = table_list.$$state.value.data;
            $interval.cancel(wait_db);
        }
    }, 50);

    //this is the code to capture the emited event
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) 
    {
        $scope.goShow($scope.clips[0]);
    });
    
    
    // return a declaration that the url is trust
    $scope.goTrust = function(src)
    {
        return videoService.trustSrc(src);
    };
        
    //function to insert into the scope the clip to show        
    $scope.goShow = function(clip) 
    {    

        $scope.clip = clip;       
        visiting = document.getElementById(clip._id);
        console.log('clip._id: '+clip._id)
        
        $(visiting).removeClass("colorVisited");
        $(visiting).addClass("colorVisiting");
        if(visiting!=visited)
            $(visited).addClass("colorVisited");
        visited = visiting; 
    };
    
    
        
};
angular.module('diffSign').controller('Learning_playgroundController',Learning_playgroundController);