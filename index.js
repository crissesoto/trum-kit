// quering for all the buttons
const buttons = document.querySelectorAll(".drum");

// add eventListener
buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("I got clicked!");
  });
});
