document.getElementById("StartTimer").addEventListener("click", StartTimer);


function StartTimer() {
var d = new Date().getTime();
var countDownDate = new Date(d+ 25*60000);

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Your Done!, Take a 5 minute break";
    }

    document.getElementById("StartTimer").style.display = "none";

},1000);

}