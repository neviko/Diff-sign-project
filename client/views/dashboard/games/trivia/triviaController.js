(function (app) {
    var timeOut;

    var triviaController = function ($scope, triviaService,videoService , $interval,$timeout) {

        $scope.score = 0;
        $scope.timer = 10;
        $scope.lives = 5;
        $scope.isRunning=true;
        $scope.isGameOver = false;
        $scope.messageAfterAnswer="";



        var clips = triviaService.initQuststions();



        var answers=[];

        function loadQuestion(){


            $scope.currClip = triviaService.currObj(clips);//now trivia service have this mathood because we externalize it in triviaService page.
            if($scope.currClip =="game over")
            {
                messageAfterAnswer="game over";
                clearTimeout(timeOut);
                $scope.isRunning=false;
                $scope.isGameOver=true;
                return;

            }

            answers=[{triviaObj:"",isCorrect:false}];
            triviaService.setAnswers(clips,answers);
            console.log(answers);
            //here answers contain 4 different answers
            triviaService.mixArrayObjects(answers);
            console.log(answers);
            $scope.ansArr=answers;
            $scope.messageAfterAnswer="";
        }

    if($scope.currClip !="game over")
        loadQuestion();

        //this function bind the dom with the trivia service because on ng-click we must call to function in $scope controller!
        $scope.onUserWordClick = function (e) {

            var elementId = $(e.target).data('id'); // get the element id from dom

            var isCorrect= triviaService.onUserChooseAnswer(answers,elementId);
            if(isCorrect){
                $scope.score+=1;
                $scope.messageAfterAnswer="תשובה נכונה !";
            }


            else{
                $scope.messageAfterAnswer="תשובה שגויה יה זלמה !...חבל";

                if($scope.lives==0)
                {
                    $scope.messageAfterAnswer = "המשחק נגמר ! הניקוד שצברת הינו : " + $scope.score;
                }
                else
                {
                    $scope.lives--;

                }

            }


            timeOut =  setTimeout(function(){
                console.log("in delay");
            }, 4000);



            $scope.messageAfterAnswer="";
            loadQuestion();
        };


        $scope.goTrust = function(src) // checking the video
        {
            return videoService.trustSrc(src);
        };



       function aabb(){
            state.reload();
        }



    };


    app.controller('triviaController', ["$scope", "triviaService","videoService" , "$interval","$timeout",triviaController]); // declare on the controller and run loginController


})(angular.module('diffSign'));
