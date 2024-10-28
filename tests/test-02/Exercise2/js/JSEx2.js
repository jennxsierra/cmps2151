/* 	CMPS2151 - Test#2 - Web Development
    Student Name: Jennessa Sierra
    Exercise 2: Traffic Light
	Date: October 28, 2024 */

function resetLights() {
  document.getElementById("GreenLight").style.backgroundColor = "";
  document.getElementById("YellowLight").style.backgroundColor = "";
  document.getElementById("RedLight").style.backgroundColor = "";
  document.getElementById("RedLight").classList.remove("blink"); // Remove the blink class
}

function makeLight(color) {
  const lightElement = document.getElementById(`${color}Light`);
  const currentColor = lightElement.style.backgroundColor;

  // Reset all lights
  resetLights();

  // Toggle the selected light
  if (currentColor !== color.toLowerCase()) {
    lightElement.style.backgroundColor = color.toLowerCase();
  }
}

function blink() {
  resetLights();
  document.getElementById("RedLight").classList.add("blink");
}

// Add mouseout event listeners to reset the light color
document.getElementById("GreenLight").addEventListener("mouseout", () => {
  document.getElementById("GreenLight").style.backgroundColor = "white";
});
document.getElementById("YellowLight").addEventListener("mouseout", () => {
  document.getElementById("YellowLight").style.backgroundColor = "white";
});
document.getElementById("RedLight").addEventListener("mouseout", () => {
  document.getElementById("RedLight").style.backgroundColor = "white";
});
