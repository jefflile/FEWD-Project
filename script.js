function betFunction() {
    var x, text;
    x = document.getElementById("horse-numb").value;
    if (isNaN(x) || x < 1 || x > 3) {
    text = "Please choose a horse number (#) in the race.";
    } else {
    text = "Your bet has been submitted.";}
    document.getElementById("horse-bet").innerHTML = text;
}

function resetFunction() {
    document.getElementById("horse-numb").reset();
}

var horseArray = [
    "Stud",
    "Stud",
    "Stud",
    "Stud",
    "Stud",
    "Bugle",
    "Bugle",
    "Bugle",
    "Lucky",
    "Lucky"
    ];
    
var winningHorse = horseArray[Math.floor(Math.random()*horseArray.length)];

console.log(winningHorse)
