let horseArray = [
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
    
let winningHorseNumber = horseArray[Math.floor(Math.random()*horseArray.length)];

console.log("Winning Horse:", winningHorseNumber)


betButton.addEventListener('click', () => {
    let x;
    x = document.getElementById("horse-choice").value;
    if (isNaN(x) || x < 1 || x > 3) {
        alert("Please choose a horse number (#) in the race.");
    } else {
        alert("Your bet has been submitted.");
    }                        
});

betButton.addEventListener('click', () => {
    let x;
    x = document.getElementById("horse-choice").value;
    if (x === winningHorseNumber) {
        !alert('You picked the correct horse!'); location.reload();
    } else if (x >= 1 && x <= 3 && x !== winningHorseNumber) {
        !alert('Sorry! You picked a loser.'); location.reload();
    } else {
        //do nothing
    }                    
});
