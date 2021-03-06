document.getElementById("StartTimer").addEventListener("click", StartTimer);

document.addEventListener('DOMContentLoaded', function() {
var cd = localStorage.getItem('CountDown');
var d = new Date().getTime();
var rt = localStorage.getItem('RelaxTime');
    if(cd !== null && cd>d || rt>d) {
        notifyExtension();
        StartTimer();
    }
}, false);


/*
Used to call the background timer function to create the sound effect
*/
function notifyExtension() { 
    browser.runtime.sendMessage({"url": 1});
  }
  /*
  Add notifyExtension() as a listener to click events.
  */
 document.getElementById("StartTimer").addEventListener("click", notifyExtension);
var RelaxTime;

function getRelaxtime() {
    return RelaxTime;
}
function setRelaxTime(x) {
    RelaxTime = x;
}
var m;
function get_m() {
    return m;
}
function StartTimer() {
myStorage = window.localStorage;
var RelaxDate;
var rt = localStorage.getItem('RelaxTime');
var cd = localStorage.getItem('CountDown');
var d = new Date().getTime();    
    
var intervalID = 0;
    if(rt>d){
        RelaxDate = rt;
        window.setRelaxTime(rt);  
        var m = setInterval(z,1000);
    }
    else {
            if(cd !== null && cd>d) {
            var countDownDate = cd;
        }
            else {
            var countDownDate = new Date(d+ 0.1*60000).getTime();              
        }
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Output the result in an element with id="timer"
            document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
            document.getElementById("timer").style.color = "#ff2400"
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "Your Done!, Take a 5 minute break";
                var rt = localStorage.getItem('RelaxTime');
                if(rt !== null && rt>now) {
                    RelaxDate = rt;
        
                }
                else {
                    RelaxDate = new Date(now+ 1*60000);
                }
                this.setRelaxTime(RelaxDate.getTime());
                intervalID = setInterval(y, 1000);    
            }
            if(distance > 0 ) {
            document.getElementById("StartTimer").style.display = "none";
            }
            localStorage.setItem('Start_Time', now);
            localStorage.setItem('CountDown',countDownDate);
        },1000)   
    }
var y = function() {
    RelaxTime = this.getRelaxtime();
    var now = new Date().getTime();
    var distance = RelaxTime - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
    document.getElementById("timer").style.color = "#396516";
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
    localStorage.setItem('RelaxTime',RelaxTime);
}

}

 function z() {RelaxTime = this.getRelaxtime();
    var now = new Date().getTime();
    var distance = RelaxTime - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
    document.getElementById("timer").style.color = "#396516";
    if (distance < 0) {
        clearInterval(window.get_m());
        clearInterval(z);
        var audio = new Audio('boom.mp3');
        audio.play();
        document.getElementById("timer").innerHTML = "New Session?";
        document.getElementById("StartTimer").style.display = "inline-block";
    }
    if(distance > 0 ) {
    document.getElementById("StartTimer").style.display = "none";
    }
    localStorage.setItem('RelaxTime',RelaxTime);
}
