function betFunction() {
    var x, text;
    x = document.getElementById("horse-choice").value;
    if (isNaN(x) || x < 1 || x > 3) {
    text = "Please choose a horse number (#) in the race.";
    } else {
    text = "Your bet has been submitted.";}
    document.getElementById("horse-bet").innerHTML = text;
}

var horseArray = [
    "3",
    "3",
    "3",
    "3",
    "3",
    "2",
    "2",
    "2",
    "1",
    "1"
    ];
    
var winningHorseNumber = horseArray[Math.floor(Math.random()*horseArray.length)];

console.log(winningHorseNumber)



// function correctHorse() {
//     if (document.getElementById("horse-choice").value === winningHorseNumber) {
//         console.log('Matched');
//     } else {
//         console.log('Not matched');
//     }
// }

// console.log(correctHorse)
