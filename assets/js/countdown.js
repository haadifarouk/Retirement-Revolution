function padZero(number) {
    return number < 10 ? '0' + number : number.toString();
  }
  
var countDownDate = new Date("Feb 20, 2024 08:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = padZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
    var hours = padZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = padZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = padZero(Math.floor((distance % (1000 * 60)) / 1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance <0 ){
        clearInterval(x)
    }

},1000);
