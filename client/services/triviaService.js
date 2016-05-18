/**
 this services contains all the Trivia game logic
 */

(function(){

    var globalCurrClip;
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
        service.timerSet = timerSet;
        //service.upLeftPicClick = upLeftPicClick;
        //service.upRightPicClick = upRightPicClick;
        //service.downLeftPicClick = downLeftPicClick;
        //service.downRightPicClick = downRightPicClick;

        ///////////////return the object that have all the functions in this page that include all the logic//////
        return service;



        //method to choose array element that not choose yet
        function currObj(clips) {

            while (1) {
                var randClip = Math.floor((Math.random() * clips.length) );
                if (clips[randClip].isViewed == false)
                {
                    globalCurrClip=clips[randClip];
                    clips[randClip].isViewed = true;
                   return clips[randClip];
                }
            }
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
        
        function timerSet()
        {
            //make the timer set. the timer will restart when a clip change.
        }
        
    }
})();







