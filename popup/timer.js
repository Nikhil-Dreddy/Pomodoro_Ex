document.getElementById("StartTimer").addEventListener("click", StartTimer);
document.addEventListener('DOMContentLoaded', function() {
var cd = localStorage.getItem('CountDown');
var d = new Date().getTime();    
    if(cd !== null && cd>d) {
        StartTimer();
    }
}, false);

function StartTimer() {
myStorage = window.localStorage;
var cd = localStorage.getItem('CountDown');
var d = new Date().getTime();    
    if(cd !== null && cd>d) {
        var countDownDate = cd;
    }
    else {
        var countDownDate = new Date(d+ 1*60000).getTime();    
    }
var intervalID = 0;
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Your Done!, Take a 5 minute break";
        var audio = new Audio('yay.mp3');
        audio.play();
        var rt = localStorage.getItem('RelaxTime');
        intervalID = setInterval(y(rt), 1000);    
    }
    if(distance > 0 ) {
    document.getElementById("StartTimer").style.display = "none";
    }
    localStorage.setItem('Start_Time', now);
    localStorage.setItem('CountDown',countDownDate);
},1000);

var y = function(rt) {
    if(rt !== null && rt>d) {
        var RelaxDate = rt;
    }
    else {
        var RelaxDate = new Date(d+ 5*60000);
    }
    
    var now = new Date().getTime();
    var distance = RelaxDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(intervalID);
        clearInterval(y);
        var audio = new Audio('boom.mp3');
        audio.play();
        document.getElementById("timer").innerHTML = "New Session?";
        document.getElementById("StartTimer").style.display = "inline-block";
    }
    if(distance > 0 ) {
    document.getElementById("StartTimer").style.display = "none";
    }
    localStorage.setItem('RelaxTime',countDownDate);
}
}
