function triviaController($scope,$interval,triviaService,videoService,dbService,$location, $anchorScroll)
{
    var timeOut;


    $scope.score = 0;
    $scope.timer = 10;
    $scope.lives = 1;
    $scope.isRunning = true;
    $scope.showAnswers = false;
    $scope.isGameOver = false;
    $scope.showNextQuesBtn = false;
    $scope.myStyle; // styled user message
    $scope.messageAfterAnswer = "";
    $scope.returnInterval;
    $scope.currClip = undefined;
    $scope.showInstructions = false;
    $scope.buttonText="הוראות";
    $scope.isPaused=false;
    $scope.isLoading = true;
    $scope.loading = "הסרטון בטעינה, אנא המתן";
    $scope.gotoBottom="";


    $scope.instructions = function() 
    {
        $scope.showInstructions = !$scope.showInstructions;
        if($scope.showInstructions==false)
            {
                $scope.buttonText="הוראות"; 
            }
        else{
            $scope.buttonText="הסתר";
        }
    };
    
    ///Mute
    var video = document.getElementById("videoId");
    video.muted= true;
    


        
    //----------- Get the db table
    var clips = [];
    var table_list = dbService.get_table();
    var wait_db = $interval(function() {
        // When server returned the table
        if (table_list.$$state.status > 0) {
            clips = table_list.$$state.value.data;
            // For each object in clips add key=isViewed, value=false
            clips.forEach(function(clip) {
                clip["isViewed"] = false;
            });
            //now trivia service have this mathood because we externalize it in triviaService page.
            $scope.currClip = triviaService.currObj(clips);
            loadQuestion();
            $interval.cancel(wait_db);
        }
    }, 50);

    
    //while ($scope.currClip == undefined) {}
    var answers = [];

    function loadQuestion() {
//        if($scope.timer==0)
//        {
//            
//                
//        }
        $scope.messageAfterAnswer = "";
        //$scope.showAnswers = true;
        $scope.showNextQuesBtn = false;
        $scope.timer = 20;
        //$scope.showAnswers = false;
        $scope.isPaused=false;
        $scope.onUserButtonClick = function (e){
             $scope.isLoading = true;
            loadQuestion();
        };
        
        $scope.currClip = triviaService.currObj(clips);
        
        if($scope.currClip == "game over")
        {
            $scope.messageAfterAnswer = "game over";
            //clearTimeout(timeOut);
            $scope.isRunning = false;
            $scope.isGameOver = true;
            return;

        }

        answers = [{triviaObj:"",isCorrect:false}];
        triviaService.setAnswers(clips,answers);
        console.log(answers);
        //here answers contain 4 different answers
        var shuffle_asnwers = triviaService.mixArrayObjects(answers);
        console.log(shuffle_asnwers);
        $scope.ansArr = shuffle_asnwers;

        $scope.onUserWordClick;
    }

    if($scope.currClip != "game over" && $scope.currClip != undefined)
        loadQuestion();

    //this function bind the dom with the trivia service because on ng-click we must call to function in $scope controller!
    $scope.onUserWordClick = function (e) {
        
        $interval.cancel(returnInterval);
        $scope.showAnswers = false;
        $scope.showNextQuesBtn = true;
        var elementId = $(e.target).data('id'); // get the element id from dom

        var isCorrect = triviaService.onUserChooseAnswer(answers,elementId);
        if(isCorrect){
            turnGreen();
            $scope.score += 10*($scope.timer);
            $scope.messageAfterAnswer = "תשובה נכונה !";
        }


        else{
            $scope.lives--;
            turnRed();
            $scope.messageAfterAnswer = " תשובה שגויה.. ";

            if($scope.lives == 0)
            {
                $scope.messageAfterAnswer = "המשחק נגמר ! הניקוד שצברת הינו : " + $scope.score;
                $scope.isRunning = false;
                $scope.isGameOver = true;
                
            }

        }

        $scope.onUserButtonClick;
    };


    $scope.goTrust = function(src) // checking the video
    {
        if (src != undefined) {
            return videoService.trustSrc(src);
        }
    };



   $scope.reGame = function(){
       console.log("reloadPage");
        location.reload();
    }


    var vid = document.getElementById("videoId");
    
        //download the video from the server
    vid.onloadstart= function(){
        console.log("video is loading...");
       
        
//        $scope.watingForLoading=false; 
 
        
    };
    //finished to download.. now it can be play.
    vid.oncanplay = function(){
//        $scope.watingForLoading=true;
        console.log("video is WORKING");
        
        
        
        
    };
    
    vid.oncanplaythrough = function()
    {
        $scope.$apply(function(){
             $scope.isLoading = false;
        });
       
    }
    
//    vid.ondurationchange = function(){
//        console.log("video is changed");
//        $scope.messageAfterAnswer = "LOADING";
//        
//        
//    }
    
    vid.onpause = function() {
        
       $scope.gotoBottom();

        if( $scope.isPaused==true) // promise that the video timer will not set up again
            return;

        $scope.isPaused=true;
        $scope.showAnswers = true;
        returnInterval = $interval(function() {
            $scope.timer--;

            if($scope.timer == 0) {
                $scope.lives--;
                $interval.cancel(returnInterval); // stop the timer
                turnRed();
                if($scope.lives==0)
                    {
                         $scope.isRunning = false;
                        $scope.isGameOver = true;
                        return;
                    }
                $scope.messageAfterAnswer = "לא הספקת לענות..חבל";
                $scope.showAnswers = false;
                $scope.showNextQuesBtn = true;
               
                
            }
         
        }, 1000);
          
    };


    function turnGreen() {
        $scope.myStyle = {color: "green", fontSize:"200%"};
    }

    function turnRed() {
        $scope.myStyle = {color: "red", fontSize:"200%"};
    }


    $scope.gotoBottom = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('answersArea');

        // call $anchorScroll()
        $anchorScroll();
    };



};
angular.module('diffSign').controller('triviaController',triviaController);


