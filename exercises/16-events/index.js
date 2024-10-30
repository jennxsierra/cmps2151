//Practice 1: Get button and and listener to pop alert
const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Button clicked");
});

//Practice 2: Get all buttons, iterate them and add listener so any button clicked will trigger alert
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Button clicked");
  });
});

//Practice 3: Play Sound
const drumList = document.querySelectorAll(".drum");

for (let drum of drumList) {
  // note the event listener keyword: "click", "keydown", etc.
  drum.addEventListener("click", function () {
    playSound(drum.innerHTML);
    animation(drum.innerHTML);
  });
}

//Practice 4: In the CSS assign a background image to each of the buttons

//Practice 4.1: Implement switch to pick which sound to play
function playSound(letter) {
  var sound;
  switch (letter) {
    case "w":
      sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "k":
      sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "l":
      sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    default:
      console.log('No related sound found for key: "' + letter + '"');
  }
}

//Practice 5: adding event for key pressed
document.addEventListener("keydown", function (e) {
  playSound(e.key);
  animation(e.key);
});

//Practicd 6: adding animation for when button is triggered. Create function called animation()
function animation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
