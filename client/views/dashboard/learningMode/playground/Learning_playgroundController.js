function Learning_playgroundController($scope,$http,$interval,videoService,dbService) 
{
    $scope.message='גן ילדים';
    $scope.clips =  [];
    
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
        
};
angular.module('diffSign').controller('Learning_playgroundController',Learning_playgroundController);