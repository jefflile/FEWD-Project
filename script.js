// This action determines whether the user entered a valid input for their horse number bet.
betButton.addEventListener('click', () => {
    let x;
    x = document.getElementById("horse-choice").value;
    if (isNaN(x) || x < 1 || x > 3) {
        alert("Please choose a horse number (#) in the race.");
    } else {
        alert("Your bet has been submitted.");
    }                        
});

// This action displays an alert if the horse picked was correct or incorrect.
betButton.addEventListener('click', () => {
    let x;
    let horseArray;
    x = document.getElementById("horse-choice").value;
    horseArray = [
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
    ]
    // The winning horse is chosen from the array at random.
    let winningHorseNumber = horseArray[Math.floor(Math.random()*horseArray.length)];

    if (x >= 1 && x <= 3 && x === winningHorseNumber) {
        !alert('You picked the correct horse!'); 
        document.getElementById("horseForm").reset();
    } else if (x >= 1 && x <= 3 && x !== winningHorseNumber) {
        !alert('Sorry! You picked a loser.'); 
        document.getElementById("horseForm").reset();
    } else {
        // Do nothing.
    }                    
});


// This controls the expander action.
const exp = document.getElementsByClassName("expander");
let i;
for (i = 0; i < acc.length; i++) {
  exp[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Show/hide menu with hamburger icon
function menuFunction() {
    let x = document.getElementById("menuLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// Hide mobile menu when menu item is clicked
function closeMenuFunction () {
  let x = document.getElementById("menuLinks");
      x.style.display = "none";
}


// When the user scrolls down 20px from the top of the document, the button appears
topButton.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "inline-block";
  }
  else {
    document.getElementById("topButton").style.display = "none";
  }
});