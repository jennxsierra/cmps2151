const symbolPlay = "⯈";
const symbolPause = "❚ ❚";
const files = ["Nature-8399", "River-655", "Waterfall-941", "Wave-2737"];

// Media player elements
const aside = document.querySelector("aside");
const video = document.querySelector("video");
const videoSource = document.querySelector("video source");

// Display video files
for (const file of files) {
  const handlePlay = () => {
    video.pause();
    video.setAttribute("src", `./videos/${file}.mp4`);
    videoSource.setAttribute("src", `./videos/${file}.mp4`);
    video.load();
    video.play();
    playButton.textContent = symbolPause;
  };

  const img = document.createElement("img");
  img.setAttribute("src", `./images/${file}.jpg`);
  img.setAttribute("alt", file);
  img.addEventListener("click", handlePlay);

  aside.appendChild(img);
}

// Play button
const playButton = document.querySelector("#play");
playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.textContent = symbolPause;
  } else {
    video.pause();
    playButton.textContent = symbolPlay;
  }
});

// Stop button
const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  playButton.textContent = symbolPlay;
});

// Skip buttons
const skipButtons = document.querySelectorAll("#controls [data-skip]");
for (const skipButton of skipButtons) {
  skipButton.addEventListener("click", () => {
    video.currentTime += parseFloat(skipButton.dataset.skip);
  });
}

// Volume slider
const volumeSlider = document.querySelector("#volume");
volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

// Progress bar
const progressBar = document.querySelector("#progressFilled");
console.log(progressBar);
const updateProgressBar = () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progress}%`;
};
video.addEventListener("timeupdate", updateProgressBar);
