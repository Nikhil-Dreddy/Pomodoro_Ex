function notify(message) {
    var rt = localStorage.getItem('RelaxTime');
    var cd = localStorage.getItem('CountDown');
    var d = new Date().getTime(); 
    if(rt>d){
        RelaxDate = rt;
        var intervalID = setInterval(y, 1000);   
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
        }
        localStorage.setItem('Start_Time', now);
        localStorage.setItem('CountDown',countDownDate);
    }
    else if(cd !== null) {
            clearInterval(x)
            var audio = new Audio('popup/yay.mp3');
            audio.play();
            intervalID = setInterval(y, 1000);   
    }
        },1000); 
    }
    
}

 function y() {
    var rt = localStorage.getItem('RelaxTime');
    if(rt !== null && rt>=now) {
    var now = new Date().getTime();
    var distance = rt - now;
    if (distance < 0) {
        clearInterval(intervalID);
        clearInterval(y);
        var audio = new Audio('boom.mp3');
        audio.play();
    }
    localStorage.setItem('RelaxTime',rt);
}
else if(rt !== null) {
    clearInterval(intervalID);
    clearInterval(y);
    var audio = new Audio('boom.mp3');
    audio.play();
}
}
/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(notify);