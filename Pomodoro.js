var x = setInterval(function() {
    myStorage = window.localStorage;
    var cd = localStorage.getItem('CountDown');
    var d = new Date().getTime();    
    if(cd !== null && cd>d) {
        var countDownDate = cd;
    
    var now = new Date().getTime();
    var distance = countDownDate - now;
    if (distance < 0) {
        clearInterval(x);
        var audio = new Audio('yay.mp3');
        audio.play();    
    }
    localStorage.setItem('Start_Time', now);
    localStorage.setItem('CountDown',countDownDate);
}
else {}
},1000);

