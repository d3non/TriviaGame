function  getTriviaQuestions(index){
    var items = ["Who sings SexyBack?", 
                 "Which mathematical symbol is not the name of an Ed Sheeran album?",
                 "Complete the Mark Ronson song title: Uptown...",
                 "What is the song that launched Justin Bieber to superstardom?",
                 "Which Taylor Swift album is Shake It Off on?",
                 "Which Beatle performed a James Bond theme song?",
                 "Who sings Call Me Maybe?",
                 "Complete the Rihanna lyric: We found love in a...",
                 "What are you gonna hear Katy Perry do?",
                 "In which video does Michael Jackson play a zombie?"
                ];

    $(".card-header").text(items[index]);
}

function  getTriviaOptions(index){
    var items = [
        ["Justin Timberlake", "Usher", "Justin Bieber", "Enrique Iglesias"], 
        ["Plus", "Multiply","Divide","Substract"],
        ["Beat", "Girl", "Funk", "Tunes"],
        ["What do you mean", "Baby", "Sorry", "Love yourself"],
        ["Speak now", "Taylor Swift", "Red", "1989"],
        ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
        ["Taylor Swift", "Carly Rae Jepsen", "Lana del Rey", "Rihanna"],
        ["Dangerous place", "Hopeless place", "Deadly place", "Ravaged place"],
        ["Roar", "Shout", "Scream", "Howl"],
        ["Bad", "Beat it", "Speed Demon", "Thriller"]
    ];

    $(".a0-button").text(items[index][0]);
    $(".a1-button").text(items[index][1]);
    $(".a2-button").text(items[index][2]);
    $(".a3-button").text(items[index][3]);

}


function  evaluateAnswer(ans){
    var items = ["Justin Timberlake", 
                "Substract", 
                "Funk", 
                "Sorry", 
                "1989",
                "Paul McCartney",
                "Carly Rae Jepsen",
                "Hopeless place",
                "Roar",
                "Thriller"];
    var ok = false;
    for (i=0; i<items.length; i++){
        if(items[i] === ans)
            ok = true;
    }

    var imageUrl = "";
    if(ok){
        imageUrl="assets/images/great.gif";
        correct++;
    }
    else{
        imageUrl="assets/images/nonono.gif";
        incorrect++;
    }

    stop();
    var img = $("<img>");
    img.attr("src", imageUrl);
    img.attr("alt", "imganswer");
    $("#images").append(img);

    myinterval = setInterval(populateProcess, 5000);

}

function displayBackground(index) {
    var items = ["jamesbrown.jpg", 
                "sheeran.jpg", 
                "brunomars.jpg", 
                "justin-bieber-3.jpg", 
                "Taylor-Swift2.jpg",
                "beatles.jpg",
                "callmemaybe.png",
                "rihanna.jpg",
                "katyperry.jpeg",
                "thriller.png"];
    
    $("body").css("background-image", "url('assets/images/" + items[index] + "')");
}

function random(size){
  return index = Math.floor(Math.random()*size);
}

    var intervalId;
    var myinterval;
    var clockRunning = false;
    var time = 10;
    var lap = 0;
    var numq = 10;
    var correct = 0;
    var incorrect = 0;
    
    function reset() {
        time = 10;
        $("#display").text("00:10");
        $("#imganswer").remove();
    }
    
    function start() {
        if (!clockRunning) {
            intervalId = setInterval(count, 1000);
            clockRunning = true;
        }
        clearInterval(myinterval);
    }
    
    function stop() {
        clearInterval(intervalId);
        clockRunning = false;
    }

    function count() {
        time--;
        var converted = timeConverter(time);

        $("#display").text(converted);
        if (time === 0){
            stop();
            alert("Time's up");
            populateProcess();
        }
    }

    function timeConverter(t) {
    
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        
        if (seconds < 10) {
        seconds = "0" + seconds;
        }
        
        if (minutes === 0) {
        minutes = "00";
        }
        else if (minutes < 10) {
        minutes = "0" + minutes;
        }
        
        return minutes + ":" + seconds;
    }

    function populateProcess(){
        if (lap<numq){
            reset();
            //var rdm = random(10);
            displayBackground(lap);
            getTriviaQuestions(lap);
            getTriviaOptions(lap);
            lap++;
            start();
        }else{
            stop();
            alert("End game");
        }
    }