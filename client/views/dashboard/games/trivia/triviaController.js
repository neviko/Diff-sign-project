(function (app) {
    var timeOut;

    var triviaController = function ($scope, triviaService,videoService , $interval,$timeout) {

        $scope.score = 0;
        $scope.timer = 10;
        $scope.lives = 3;
        $scope.isRunning=true;
        $scope.showAnswers=false;
        $scope.isGameOver = false;
        $scope.showNextQuesBtn=false;
        $scope.customStyle = {}; // styled user message
        $scope.messageAfterAnswer="";
        $scope.returnInterval;


        var clips = triviaService.initQuststions();



        var answers=[];

        function loadQuestion(){
            $scope.messageAfterAnswer="";
            $scope.showAnswers=true;
            $scope.showNextQuesBtn=false;
            $scope.timer=10;
            $scope.showAnswers=false;
            $scope.onUserButtonClick = function (e){
                loadQuestion();

            };

            $scope.currClip = triviaService.currObj(clips);//now trivia service have this mathood because we externalize it in triviaService page.
            if($scope.currClip =="game over")
            {
                $scope.messageAfterAnswer="game over";
                //clearTimeout(timeOut);
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

            $scope.onUserWordClick;
        }

    if($scope.currClip !="game over")
        loadQuestion();

        //this function bind the dom with the trivia service because on ng-click we must call to function in $scope controller!
        $scope.onUserWordClick = function (e) {

            $interval.cancel(returnInterval);
            $scope.showAnswers=false;
            $scope.showNextQuesBtn=true;
            var elementId = $(e.target).data('id'); // get the element id from dom

            var isCorrect= triviaService.onUserChooseAnswer(answers,elementId);
            if(isCorrect){
                $scope.turnGreen();
                $scope.score+=10*($scope.timer);
                $scope.messageAfterAnswer="תשובה נכונה !";
            }


            else{
                $scope.lives--;
                $scope.turnRed();
                $scope.messageAfterAnswer="תשובה שגויה יה זלמה !...חבל";

                if($scope.lives==0)
                {
                    $scope.messageAfterAnswer = "המשחק נגמר ! הניקוד שצברת הינו : " + $scope.score;
                    $scope.isRunning=false;
                }

            }


            //$scope.messageAfterAnswer="";
            $scope.onUserButtonClick;
        };


        $scope.goTrust = function(src) // checking the video
        {
            return videoService.trustSrc(src);
        };



       $scope.reGame = function(){
           console.log("reloadPage");
            location.reload();
        }


        var vid = document.getElementById("videoId");
        vid.onpause = function() {

            $scope.showAnswers=true;
             returnInterval = $interval(function(){
                $scope.timer--;

                if($scope.timer==0)
                {
                    $scope.lives--;
                    $interval.cancel(returnInterval); // stop the timer
                    $scope.messageAfterAnswer="לא הספקת לענות..חבל";
                    $scope.showAnswers=false;
                    $scope.showNextQuesBtn=true;
                }
            }, 1000)
        };





        $scope.turnGreen = function (){
            //what to do here?
            $scope.messageAfterAnswer.fontcolor("green");
        };

        $scope.turnRed = function() {
            $scope.messageAfterAnswer.colorClass="red";
        };


    };







    app.controller('triviaController', ["$scope", "triviaService","videoService" , "$interval","$timeout",triviaController]); // declare on the controller and run loginController


})(angular.module('diffSign'));
