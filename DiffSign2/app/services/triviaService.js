/**
 this services contains all the Trivia game logic
 */

(function(){

    angular.module('diffSign').factory('triviaService', Service);

    function Service($http) {
        var service = {}; // the returned element


        ////---- the function that we want to call them outside the iffy---/////
        ////---- the server object have all the functions call at this page--/////
        ////---- left sidr is the function name \\\ right side is how we want to call the function from outside-/////


        service.currObj = currObj; // the returned object
        service.setAnswers = setAnswers;
        service.mixArrayObjects = mixArrayObjects;

        ///////////////return the object that have all the functions in this page that include all the logic//////
        return service;


        var globalCurrClip;
        //method to choose array element that not choose yet
        function currObj (clips) {

            while (1) {
                var randClip = Math.floor((Math.random() * clips.length) );
                if (clips[randClip].isViewed == false)
                {
                    globalCurrClip=clips[randClip];
                    clips[randClip].isViewed = true;
                   return clips[randClip];
                }
            }
        };




        //this method set 4 random answers and mix answers play order
        function setAnswers(clips,answers){

            answers[0]=globalCurrClip;
           // var isFound=false;
            for(var i=1 ; i < 4 ; i++)
            {
                var isFound=false;
                var randClip = Math.floor((Math.random() * clips.length) );
                for(var j=0 ; j < answers.length; j++)
                {

                    if(clips[randClip] == answers[j]) // if we choose an existing object we will choose again
                    {
                        i--;
                        isFound=true;
                        break;
                    }
                }
                if(isFound == false)
                    answers[i]= clips[randClip];

            }
            return answers;
        }



        // this method mix the 4 answers positions
        function mixArrayObjects(array){

            var tempArr=[{}];
            var randClip = Math.floor((Math.random() * array.length));
            tempArr[0]= array[randClip];
            for(var i=1 ; i < array.length; i++)
            {
                var randClip = Math.floor((Math.random() * array.length));
                var isFound=false;
                for(var j=0 ; j < tempArr.length; j++)
                {
                    if(array[randClip] == tempArr[j])// if we choose an existing object we will choose again
                    {
                        i--;
                        isFound=true;
                        break;
                    }
                }
                if(isFound == false)
                    tempArr[i]= array[randClip];
            }

            for(var i=0 ; i < array.length; i++)
                array[i]=tempArr[i];

            return array;
        }
    }
})();




