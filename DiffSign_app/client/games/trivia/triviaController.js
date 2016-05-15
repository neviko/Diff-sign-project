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
            "_id":   {
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

    var triviaController = function ($scope, triviaService,videoService) {

        $scope.score = 550;
        $scope.timer = 5;
        $scope.lives = 3;
        $scope.messageAfterAnswer="";



        $scope.currClip = triviaService.currObj(clips);//now trivia service have this mathood because we externalize it in triviaService page.
        var answers=[{triviaObj:"",isCorrect:false}];
        triviaService.setAnswers(clips,answers);
        console.log(answers);
        // here answers contain 4 different answers
        triviaService.mixArrayObjects(answers);
        console.log(answers);
        $scope.ansArr=answers;


        //this function bind the dom with the trivia service because on ng-click we must call to function in $scope controller!
        $scope.onUserPicClick = function (e) {


            var elementId = $(e.target).data('id'); // get the element id from dom

           var isCorrect= triviaService.onUserChooseAnswer(answers,elementId);
            if(isCorrect){
                $scope.messageAfterAnswer="תשובה נכונה !";

            }


            else{
                $scope.messageAfterAnswer="תשובה שגויה יה זלמה !...חבל";
            }

        };


        $scope.goTrust = function(src) // checking the video
        {
            return videoService.trustSrc(src);
        };

        //function to insert into the scope the clip to show
        //$scope.goShow = function(clip) // call from html
        //{
        //    $scope.clip = clip;
        //};

    };


    app.controller('triviaController', triviaController); // declare on the controller and run loginController


})(angular.module('diffSign'));


