// quering for all the buttons
const buttons = document.querySelectorAll(".drum");
const letterW = document.querySelector(".w");

// add eventListener to all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("pressed");
    button.style.color = "white";
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
        break;
    }
  });
});
