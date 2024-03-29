// quering for all the buttons
const buttons = document.querySelectorAll(".drum");
const body = document.querySelector("body");
// add eventListener to all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let buttonInnerHTML = button.innerHTML;
    let sound;

    // switch statement
    switch (buttonInnerHTML) {
      case "w":
        sound = new Audio("sounds/crash.mp3");
        sound.play();
        break;
      case "a":
        sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
        break;
      case "s":
        sound = new Audio("sounds/snare.mp3");
        sound.play();
        break;
      case "d":
        sound = new Audio("sounds/tom-1.mp3");
        sound.play();
        break;
      case "j":
        sound = new Audio("sounds/tom-2.mp3");
        sound.play();
        break;
      case "k":
        sound = new Audio("sounds/tom-3.mp3");
        sound.play();
        break;
      case "l":
        sound = new Audio("sounds/tom-4.mp3");
        sound.play();
        break;
      default:
        alert("This key has not sound");
        break;
    }

    animation(buttonInnerHTML);
  });
});

body.addEventListener("keydown", e => {
  //alert("key pressed");
  switch (e.key) {
    case "w":
      sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "a":
      sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "s":
      sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "d":
      sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "j":
      sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "k":
      sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "l":
      sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    default:
      alert("This key has not sound");
      break;
  }
  animation(e.key);
});

// animation function

function animation(currentKey) {
  var activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");
  // animation
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
