/**
 this services contains all the Trivia game logic
 */

(function(){

    var globalCurrClip;
    var numOfQuestions=0;
    angular.module('diffSign').factory('triviaService', Service);

    function Service($http) {
        var service = {}; // the returned element


        ////---- the function that we want to call them outside the iffy---/////
        ////---- the server object have all the functions call at this page--/////
        ////---- left sidr is the function name \\\ right side is how we want to call the function from outside-/////


        service.currObj = currObj; // the returned object
        service.setAnswers = setAnswers;
        service.mixArrayObjects = mixArrayObjects;
        service.onUserChooseAnswer = onUserChooseAnswer;
        service.initQuststions = initQuststions;
        //service.upLeftPicClick = upLeftPicClick;
        //service.upRightPicClick = upRightPicClick;
        //service.downLeftPicClick = downLeftPicClick;
        //service.downRightPicClick = downRightPicClick;

        ///////////////return the object that have all the functions in this page that include all the logic//////
        return service;



        //method to choose array element that not choose yet
        function currObj(clips) {

            while ( numOfQuestions < clips.length) {
                var randClip = Math.floor((Math.random() * clips.length) );
                if (clips[randClip].isViewed == false)
                {
                    globalCurrClip=clips[randClip];
                    clips[randClip].isViewed = true;
                    numOfQuestions++;
                    return clips[randClip];
                }

            }

            console.log("game over");
            return "game over";
        }




        //this method set 4 random answers and mix answers play order
        function setAnswers(clips,answers){

            answers[0].triviaObj=globalCurrClip; // the clip
            answers[0].isCorrect=true;
           // var isFound=false;
            for(var i=1 ; i < 4 ; i++)
            {
                var isFound=false;
                var randClip = Math.floor((Math.random() * clips.length) );
                for(var j=0 ; j < answers.length; j++)
                {

                    if(clips[randClip] == answers[j].triviaObj) // if we choose an existing object we will choose again
                    {
                        i--;
                        isFound=true;
                        break;
                    }
                }
                if(isFound == false)
                {
                    answers.push({triviaObj:clips[randClip],isCorrect:false});

                }

            }
            return answers;
        }



        // this method mix the 4 answers positions
        function mixArrayObjects(array){

            var tempArr=[{triviaObj:"",isCorrect:false}];
            var randClip = Math.floor((Math.random() * array.length));

            tempArr[0].triviaObj= array[randClip].triviaObj;
            tempArr[0].isCorrect = array[randClip].isCorrect;

            for(var i=1 ; i < array.length; i++)
            {
                var randClip = Math.floor((Math.random() * array.length));
                var isFound=false;
                for(var j=0 ; j < tempArr.length; j++)
                {
                    if(array[randClip].triviaObj == tempArr[j].triviaObj)// if we choose an existing object we will choose again
                    {
                        i--;
                        isFound=true;
                        break;
                    }
                }
                if(isFound == false)
                    tempArr.push({triviaObj:array[randClip].triviaObj , isCorrect:array[randClip].isCorrect})

            }

            for(var i=0 ; i < array.length; i++)// copy elements to the original array
            {
                array[i].triviaObj=tempArr[i].triviaObj;
                array[i].isCorrect = tempArr[i].isCorrect;
            }


            return array;
        }




        //check user answer and react (on success and on wrong)
        function onUserChooseAnswer(answers,elementId) {
            if(elementId == "upLeft"){
                if(answers[0].isCorrect ==true){
                    console.log("perfect");
                    return true;
                }
                else{
                    console.log("wrong answer");
                }
            }

            else if(elementId == "upRight"){
                if(answers[1].isCorrect ==true){
                    return true;
                    console.log("perfect");
                }
                else{
                    console.log("wrong answer");
                    return false;
                }
            }

            else if(elementId == "buttomLeft"){
                if(answers[2].isCorrect ==true){
                    return true;
                    console.log("perfect");
                }
                else{
                    console.log("wrong answer");
                    return false;
                }
            }

            else if(elementId == "buttomRight"){
                if(answers[3].isCorrect ==true){
                    return true;
                    console.log("perfect");
                }
                else{
                    console.log("wrong answer");
                    return false;
                }
            }

            else{
                console.log("neviko something wrong");
                return false;
            }
        }


        function onWrongAnswer()
        {

        }
        
        function initQuststions()
        {
            var clips = [{
                "_id": {
                    "$oid": "572798cfc80eb653c3020a75"
                },
                "name_en": "father",
                "name_heb": "אבא",
                "category": "general",
                "clip_url": "https://diffsign.blob.core.windows.net/clips/general/father.MOV",
                "pic_url": "games/trivia/imagesTemp/1.jpg",
                "isViewed": false
            },
                {
                    "_id":   {
                        "$oid": "572798fec80eb653c3020a79"
                    },
                    "name_en": "ground",
                    "name_heb": "אדמה",
                    "category": "playground",
                    "clip_url": "https://diffsign.blob.core.windows.net/clips/playground/ground.MOV",
                    "pic_url": "games/trivia/imagesTemp/2.jpg",
                    "isViewed": false

                },
                {
                    "_id": {
                        "$oid": "5728954efca0fd6392731d11"
                    },
                    "name_en": "dinner",
                    "name_heb": "ארוחת_ערב",
                    "category": "house",
                    "clip_url": "https://diffsign.blob.core.windows.net/clips/house/dinner.MOV",
                    "pic_url": "games/trivia/imagesTemp/3.jpg",
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
                    "pic_url": "games/trivia/imagesTemp/3.jpg",
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
                    "pic_url": "games/trivia/imagesTemp/4.png",
                    "isViewed": false
                },
                {
                    "_id": {
                        "$oid": "572898ccfca0fd6392731e71"
                    },
                    "name_en": "lunch",
                    "name_heb": "ארוחת_צהריים",
                    "category": "house",
                    "clip_url": "https://diffsign.blob.core.windows.net/clips/house/lunch.MOV",
                    "pic_url": "games/trivia/imagesTemp/4.png",
                    "isViewed": false
                }];
            return clips;
        }
        
    }
})();







