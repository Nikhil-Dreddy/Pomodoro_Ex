function notify(message) {
    var rt = localStorage.getItem('RelaxTime');
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
    var y = function() {
        if(rt !== null && rt>=now) {
        var now = new Date().getTime();
        var distance = rt - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="timer"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
    
        if (distance < 0) {
            clearInterval(intervalID);
            clearInterval(y);
            var audio = new Audio('boom.mp3');
            audio.play();
        }
        localStorage.setItem('RelaxTime',countDownDate);
    }
    else if(rt !== null) {
        clearInterval(intervalID);
        clearInterval(y);
        var audio = new Audio('boom.mp3');
        audio.play();
    }
    }
}

/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(notify);