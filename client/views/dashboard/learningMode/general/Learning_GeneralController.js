function Learning_GeneralController($scope,$http,$timeout,$rootScope,videoService, dbService) 
{
    $scope.message='מילים כלליות';
    $scope.clips =  [];
    
    //----------- Get the db table
    var category = 'general';
    var table_list = dbService.get_table(category);
    $timeout(callAtTimeout, 25);

    function callAtTimeout() {
        console.log("Timeout occurred");
        // If the server didn't return yet the table
        if (table_list.$$state.status == 0) {
            $timeout(callAtTimeout, 25);
        }
        // The server returned the table
        else {
//            console.log('in controller, table: '+table_list.$$state.value.data);
            $scope.clips = table_list.$$state.value.data;
        }
    };
    
    
       
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
angular.module('diffSign').controller('Learning_GeneralController',Learning_GeneralController);