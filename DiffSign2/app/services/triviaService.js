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


        ///////////////return the object that have all the functions in this page that include all the logic//////
        return service;


        var globalCurrClip;
        //method to choose array element that not choose yet
        var currObj = function (clips) {

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





        function setAnswers(clips,answers){

            answers[0]=globalCurrClip;
            for(var i=1 ; i < 4 ; i++)
            {
                var randClip = Math.floor((Math.random() * clips.length) );
                for(var j=0 ; j < answers.length; j++)
                {
                    if(clips[randclip] == answers[j])
                    {
                        i--;
                    }
                }
            }

        }

    }
})();




