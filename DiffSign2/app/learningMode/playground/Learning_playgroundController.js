<<<<<<< HEAD
(function(app)
 {
    function Learning_playgroundController($scope,$http,$routeParams,$window,$sce)
    {
        $scope.message='גן ילדים';
=======
(function(app){

    clips = [{
    "_id": {
        "$oid": "572798cfc80eb653c3020a75"
    },
    "name_en": "father",
    "name_heb": "אבא",
    "category": "general",
    "clip_url": "https://diffsign.blob.core.windows.net/clips/general/father.MOV",
    "pic_url": "",
     "isViewed"  : false
},
            {
    "_id": {
        "$oid": "572798fec80eb653c3020a79"
    },
    "name_en": "ground",
    "name_heb": "אדמה",
    "category": "general",
    "clip_url": "https://diffsign.blob.core.windows.net/clips/general/ground.MOV",
    "pic_url": "",
    "isViewed"  : false

            },
            {
    "_id": {
        "$oid": "5728954efca0fd6392731d11"
    },
    "name_en": "dinner",
    "name_heb": "ארוחת_ערב",
    "category": "house",
    "clip_url": "https://diffsign.blob.core.windows.net/clips/general/dinner.MOV",
    "pic_url": "",
                "isViewed"  : false
},
            {
    "_id": {
        "$oid": "572897b2fca0fd6392731e50"
    },
    "name_en": "how_do_you_feel",
    "name_heb": "?איך_אתה_מרגיש",
    "category": "general",
    "clip_url": "https://diffsign.blob.core.windows.net/clips/general/how_do_you_feel.MOV",
    "pic_url": "",
                "isViewed"  : false
},
            {
    "_id": {
        "$oid": "57289828fca0fd6392731e65"
    },
    "name_en": "i_love_you",
    "name_heb": "אני_אוהב_אותך",
    "category": "general",
    "clip_url": "https://diffsign.blob.core.windows.net/clips/general/i_love_you.MOV",
    "pic_url": "",
                "isViewed"  : false
},
            {
    "_id": {
        "$oid": "572898ccfca0fd6392731e71"
    },
    "name_en": "lunch",
    "name_heb": "ארוחת_צהריים",
    "category": "general",
    "clip_url": "https://diffsign.blob.core.windows.net/clips/general/lunch.MOV",
    "pic_url": "",
                "isViewed"  : false
}];

    function Learning_playgroundController($scope,$http,$routeParams,$window) {
        $scope.message='לימוד גן משחקים';
>>>>>>> 0864b51f9a176ea5efbe34c70d3e41fa8e49a204
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
    app.controller('Learning_playgroundController',Learning_playgroundController);
 
})( angular.module('diffSign'));



