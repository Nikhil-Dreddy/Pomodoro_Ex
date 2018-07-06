var intervalID;
var z;
function setIntervalID(x) {
    intervalID = x;
}
function getIntervalId() {
    return intervalID;
}
function get_z() {
    return z;
}
function set_z(x) {
    z=x;
}

function notify(message) {
    var rt = localStorage.getItem('RelaxTime');
    var cd = localStorage.getItem('CountDown');
    var d = new Date().getTime(); 
    if(rt>d){
        var x = setInterval(y, 1000);  
        this.setIntervalID(x);
    }
    else {
        var x = setInterval(function() {
        myStorage = window.localStorage;
        var cd = localStorage.getItem('CountDown');
        var d = new Date().getTime();    
        if(cd !== null && cd>=d) {
        var countDownDate = cd;
        var now = new Date().getTime();
        var distance = countDownDate - now;
        if (distance < 0) {
            clearInterval(x);
            var audio = new Audio('popup/yay.mp3');
            audio.play();    
            z = setInterval(y, 1000);
            this.set_z(z);
        }
        localStorage.setItem('Start_Time', now);
        localStorage.setItem('CountDown',countDownDate);
    }
    else if(cd !== null) {
            clearInterval(x)
            var audio = new Audio('popup/yay.mp3');
            audio.play();
            var d = new Date().getTime();   
            RelaxDate = new Date(d+ 1*60000);
            localStorage.setItem('RelaxTime',RelaxDate.getTime());
            z = setInterval(y, 1000);
            this.set_z(z);
    }
        },1000); 
    }
    
}

 function y() {
    var rt = localStorage.getItem('RelaxTime');
    var now = new Date().getTime();
    if(rt !== null && rt>=now) {
    var now = new Date().getTime();
    var distance = rt - now;
    if (distance < 0) {
        clearInterval(this.getIntervalId());
        clearInterval(this.get_z());
        clearInterval(y);
        var audio = new Audio('popup/boom.mp3');
        audio.play();
    }
    localStorage.setItem('RelaxTime',rt);
}
else if(rt !== null) {
    clearInterval(this.get_z());
    clearInterval(this.getIntervalId());
    clearInterval(y);
    var audio = new Audio('popup/boom.mp3');
    audio.play();
}
}
/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(notify);