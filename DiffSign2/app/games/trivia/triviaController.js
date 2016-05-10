(function (app) {

    var clips = [{
        "_id": {
            "$oid": "572798cfc80eb653c3020a75"
        },
        "name_en": "father",
        "name_heb": "אבא",
        "category": "general",
        "clip_url": "https://diffsign.blob.core.windows.net/clips/general/father.MOV",
        "pic_url": "app/games/trivia/imagesTemp/1.jpg",
        "isViewed": false
    },
        {
            "_id": {
                "$oid": "572798fec80eb653c3020a79"
            },
            "name_en": "ground",
            "name_heb": "אדמה",
            "category": "general",
            "clip_url": "https://diffsign.blob.core.windows.net/clips/general/ground.MOV",
            "pic_url": "app/games/trivia/imagesTemp/2.jpg",
            "isViewed": false

        },
        {
            "_id": {
                "$oid": "5728954efca0fd6392731d11"
            },
            "name_en": "dinner",
            "name_heb": "ארוחת_ערב",
            "category": "house",
            "clip_url": "https://diffsign.blob.core.windows.net/clips/general/dinner.MOV",
            "pic_url": "app/games/trivia/imagesTemp/3.jpg",
            "isViewed": false
        },
        {
            "_id": {
                "$oid": "572897b2fca0fd6392731e50"
            },
            "name_en": "how_do_you_feel",
            "name_heb": "?איך_אתה_מרגיש",
            "category": "general",
            "clip_url": "https://diffsign.blob.core.windows.net/clips/general/how_do_you_feel.MOV",
            "pic_url": "app/games/trivia/imagesTemp/3.jpg",
            "isViewed": false
        },
        {
            "_id": {
                "$oid": "57289828fca0fd6392731e65"
            },
            "name_en": "i_love_you",
            "name_heb": "אני_אוהב_אותך",
            "category": "general",
            "clip_url": "https://diffsign.blob.core.windows.net/clips/general/i_love_you.MOV",
            "pic_url": "app/games/trivia/imagesTemp/4.png",
            "isViewed": false
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
            "isViewed": false
        }];

    var triviaController = function ($scope, triviaService) {
        $scope.score = "550";
        $scope.timer = "5";
      //  $scope.videoName = $routeParams.videoName;
        $scope.currClip = triviaService.currObj(clips);//now trivia service have this mathood because we externalize it in triviaService page.

    };


    app.controller('triviaController', triviaController); // declare on the controller and run loginController


})(angular.module('diffSign'));


