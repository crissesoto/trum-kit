// quering for all the buttons
const buttons = document.querySelectorAll(".drum");
const letterW = document.querySelector(".w");

// add eventListener to all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("pressed");
  });
});

// add sound to each letter
letterW.addEventListener("click", () => {
  let sound = new Audio("sounds/tom-1.mp3");
  sound.play();
});
