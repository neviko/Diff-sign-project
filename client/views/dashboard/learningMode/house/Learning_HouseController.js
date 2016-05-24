function Learning_HouseController($scope,$http,videoService) 
{
    $scope.message='כלי בית';
    $scope.clips=  [
        {
            "_id": 
            {
                "$oid": "572798cfc80eb653c3020a75"
            },
            "name_en": "father",
            "name_heb": "אבא",
            "category": "general",
            "clip_url": "https://diffsign.blob.core.windows.net/clips/general/father.MOV",
            "pic_url": ""
            },
        {
            "_id":
            {
                "$oid": "572798fec80eb653c3020a79"
            },
            "name_en": "soil",
            "name_heb": "אדמה",
            "category": "playground",
            "clip_url": "https://diffsign.blob.core.windows.net/clips/playground/soil.MOV",
            "pic_url": ""
        },
        {
            "_id": 
            {
                "$oid": "5728954efca0fd6392731d11"
            },
            "name_en": "dinner",
            "name_heb": "ארוחת_ערב",
            "category": "house",
            "clip_url": "https://diffsign.blob.core.windows.net/clips/house/dinner.MOV",
            "pic_url": ""
        },
        {
            "_id": 
            {
                "$oid": "572897b2fca0fd6392731e50"
            },
            "name_en": "how_do_you_feel",
            "name_heb": "?איך_אתה_מרגיש",
            "category": "general",
            "clip_url": "https://diffsign.blob.core.windows.net/clips/general/how_do_you_feel.MOV",
            "pic_url": ""
        },
        {
            "_id": 
            {
                "$oid": "57289828fca0fd6392731e65"
            },
            "name_en": "i_love_you",
            "name_heb": "אני_אוהב_אותך",
            "category": "general",
            "clip_url": "https://diffsign.blob.core.windows.net/clips/general/i_love_you.MOV",
            "pic_url": ""
        },
        {
            "_id":
            {
                "$oid": "572898ccfca0fd6392731e71"
            },
            "name_en": "lunch",
            "name_heb": "ארוחת_צהריים",
            "category": "house",
            "clip_url": "https://diffsign.blob.core.windows.net/clips/house/lunch.MOV",
            "pic_url": ""
        }
    ];
       
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
angular.module('diffSign').controller('Learning_HouseController',Learning_HouseController);