// quering for all the buttons
const buttons = document.querySelectorAll(".drum");
console.log(buttons);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleClick();
  });
});

// function when click
function handleClick() {
  alert("I got clicked");
}
