// This action determines whether the user entered a valid input for their horse number bet.
betButton.addEventListener('click', () => {
    let x;
    x = document.getElementById("horse-choice").value;
    if (isNaN(x) || x < 1 || x > 3) {
      swal({
        title: "Try again!",
        text: "Please choose a horse number (#) in the race.",
        icon: "warning",
      });
      document.getElementById("horseForm").reset();
    } else {
        // Do nothing.
    }                        
});

// This event listener activates when the bet button is clicked.
// This is the array for possible horse winners.
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

    // This displays the winning or losing popup if a valid horse number was entered.
    if (x >= 1 && x <= 3 && x === winningHorseNumber) {
      swal({
        title: "Good job!",
        text: "You picked the correct horse! Go again and see if you can win another.",
        icon: "success",
      });
        document.getElementById("horseForm").reset();
    } else if (x >= 1 && x <= 3 && x !== winningHorseNumber) {
      swal({
        title: "Nope!",
        text: "Sorry! You picked a loser. The correct horse number was #"+winningHorseNumber+". Try again.",
        icon: "error",
      });
        document.getElementById("horseForm").reset();
    } else {
        // Do nothing.
    }                    
});


// This controls the expander action.
const acc = document.getElementsByClassName("expander");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Show/hide menu with hamburger icon.
function menuFunction() {
    let x = document.getElementById("menuLinks");
    if (x.style.display === "block") {
      x.style.display="none";
    } else {
      x.style.display="block";
      // This controls the placement of the hamburger menu icon.
      document.getElementById("icon").style.display="none";
      document.getElementById("click-icon").style.display="block";
      let hamburger = document.getElementsByClassName('click-icon')[0];
      let header = document.getElementsByClassName('main-header')[0];
      var headerHeight = header.offsetHeight;
      var hamburgerHeight = hamburger.offsetHeight
      var middle = (headerHeight/2) - (hamburgerHeight/2);
      hamburger.style.top = middle.toString() + "px";
    }
  }

// Hide mobile menu when menu item is clicked.
function closeMenuFunction () {
  let x = document.getElementById("menuLinks");
      x.style.display="none";
}


// When the user scrolls down 20px from the top of the document, the button appears.
document.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display="inline-block";
  }
  else {
    document.getElementById("topButton").style.display="none";
  }
});

function onKonamiCode(cb) {
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function () {alert('You have entered the Konami code!\n\nStud (#3) has a 50% chance of winning. You should try to bet on Stud as often as you can.')})